import { Schema, model, Types } from 'mongoose'

const inventarioSchema = new Schema({
    nombre:         String,
    descripcion:    String,
    cantidad:       String
})
export default model('Invenatio', inventarioSchema); 