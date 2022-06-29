import mongoose from 'mongoose'

const URL = 'mongodb+srv://iram:a1HLHY5Es2lwmqLp@cluster0.pxpddrh.mongodb.net/ecommerce?retryWrites=true&w=majority'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
}).then(_ => console.log('Aplicación conectada a MongoDB Atlas'))

export default connection