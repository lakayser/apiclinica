import { Schema, model, Types } from 'mongoose'

const horaMasivaSchema = new Schema({
   horaComienzo:    Date,
   horaTermino:     Date,
   intervalo:       Number,
},{
    timestamps: true,
    versionKey: false
})

export default model('HorasMasivas', horaMasivaSchema);