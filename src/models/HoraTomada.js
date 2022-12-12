import { Schema, model } from 'mongoose'

const horaTomadaSchema = new Schema({
    nombre: String,
    rut:    String,
    numero: String,
    horaTomada: [{
        type: Schema.Types.ObjectId,
        ref: "CargaMasiva"
    }],
    estado:  Boolean
})

export default model('HoraTomada', horaTomadaSchema);