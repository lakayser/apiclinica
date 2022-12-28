import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
    nombre:             String,
    fechaNac:           String,
    numeroContacto:     String,
    numeroEmergencia:   String,
    rut:                String,
    enfermedadR:        String

})

export default model('Paciente', pacienteSchema);