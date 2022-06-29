import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true, max: 100, unique: true },
  apellido: { type: String, required: true, max: 100 },
  dni: { type: Number, required: true }
})

export default mongoose.model('Usuario', usuarioSchema)