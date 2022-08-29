const twilio = require('twilio')

const accountSid = 'AC069b400d93eb54cc62faf72fee6c94e2'
const authToken = '3b1ddf9386610805003b038619a80b2b'

const client = twilio(accountSid, authToken)

const sendSMS = async () => {
  try {
    const message = await client.messages.create({
      body: 'Hola desde Node.js',
      from: '+18329153319',
      to: '+525576639967'
    })

    console.log({ message })
  } catch (e) {
    console.error(e)
  }
}

sendSMS()