import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
    nombre:             String,
    fechaNac:           String,
    numeroContacto:     String,
    numeroEmergencia:   String,
    rut:                String,
    Atenciones: [{
        type: Schema.Types.ObjectId,
        ref: "Atenciones"
    }]

})

export default model('Paciente', pacienteSchema);