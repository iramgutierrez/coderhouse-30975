
const redis = require('redis')

const client = redis.createClient({
  url: 'redis://default:zXLhTfJ8dbnXWBNgqvpORbljy240epzr@redis-11740.c82.us-east-1-2.ec2.cloud.redislabs.com:11740', 
  legacyMode: true
})

client.connect()

client.get('product6', (err, value) => {
  if (err) {
    process.exit(1)
  }
  let valueObject = {}
  try {
    valueObject = JSON.parse(value)
  } catch (e) {
    console.log(e)
  }


  console.log(value, typeof value, valueObject, valueObject.name, valueObject.price)

  process.exit()
})
