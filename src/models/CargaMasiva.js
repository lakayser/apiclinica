import { Schema, model, Types } from 'mongoose'

const cargaMasivaSchema = new Schema({
    fecha:          Date,
    dia:            String,
    hora:           String,
    disponibilidad: Boolean,
    semana:         Number,
    estado:         Boolean
},{
    timestamps: true,
    versionKey: false
})

export default model('CargaMasiva', cargaMasivaSchema);