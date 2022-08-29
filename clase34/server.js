const express = require('express')
const AWS = require('aws-sdk')

const app = express()
app.use(express.json())

AWS.config.update({
  region: 'us-east-1'
})

// AWS SNS
const sns = new AWS.SNS()
const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:462111743649:notificaciones'

// AWS DynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = 'product-inventory'

const scanDynamoRecords = async (scanParams) => {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise()
    const items = dynamoData.Items

    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey
      dynamoData = await dynamodb.scan(scanParams).promise()
      items.push(...dynamoData.Items)
    }

    return items
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

app.get('/', (req, res) => {
  return res.json({
    status: 'Ok'
  })
})

app.get('/api/products', async (req, res) => {
  const params = {
    TableName: TABLE_NAME
  }

  try {
    const products = await scanDynamoRecords(params)
    return res.json(products)
  } catch (error) {
    console.error('Ocurrio un error: ', error)
    return res.status(500).json({
      error: error.message
    })
  }
})

app.post('/api/products', (req, res) => {
  const product = req.body
  const params = {
    TableName: TABLE_NAME,
    Item: product
  }

  return dynamodb.put(params).promise()
    .then((response) => {
      console.log(`Producto guardado`, response)
      const productString = JSON.stringify(product)

      return sns.publish({
        Message: `Nuevo producto agregado: ${productString}`,
        Subject: 'Nuevo producto',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(data => {
      console.log('Producto notificado', data)

      return res.status(201).json(product)
    })
    .catch(error => {
      console.error('Ocurrio un error: ', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

app.put('/api/products/:id', (req, res) => {
  const product = {
    ...req.body,
    productid: req.params.id
  }

  const params = {
    TableName: TABLE_NAME,
    Item: product
  }

  return dynamodb.put(params).promise()
    .then((response) => {
      console.log(`Producto actualizado`, response)
      const productString = JSON.stringify(product)

      return sns.publish({
        Message: `Producto actualizado: ${productString}`,
        Subject: 'Producto actualizado',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(data => {
      console.log('Producto notificado', data)

      return res.json(product)
    })
    .catch(error => {
      console.error('Ocurrio un error: ', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

app.delete('/api/products/:id', (req, res) => {
  const product = {
    ...req.body,
    productid: req.params.id
  }

  const params = {
    TableName: TABLE_NAME,
    Key: {
      productId: req.params.id
    },
    ReturnValues: 'ALL_OLD'
  }

  return dynamodb.delete(params).promise()
    .then((response) => {
      console.log(`Producto eliminado`, response)
      const productString = JSON.stringify(response)

      return sns.publish({
        Message: `Producto eliminado: ${productString}`,
        Subject: 'Producto eliminado',
        TopicArn: SNS_TOPIC_ARN
      }).promise()
    })
    .then(data => {
      console.log('Producto notificado', data)

      return res.status(204)
    })
    .catch(error => {
      console.error('Ocurrio un error: ', error)
      return res.status(500).json({
        error: error.message
      })
    })
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', error => console.log(error))