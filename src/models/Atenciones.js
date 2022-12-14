import { Schema, model } from 'mongoose'

const atencionesSchema = new Schema({
    enfermedadR:        String,
    observaciones:      String,
    tratamiento:        String,
    nombre:             String,
    Edad:               String,
    numeroContacto:     String,
    numeroEmergencia:   String,
    rut:                String,
})

export default model('Atenciones', atencionesSchema);