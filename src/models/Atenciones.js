import { Schema, model } from 'mongoose'

const atencionesSchema = new Schema({
    enfermedadR:        String,
    observaciones:      String,
    tratamiento:        String,
})

export default model('Atenciones', atencionesSchema);