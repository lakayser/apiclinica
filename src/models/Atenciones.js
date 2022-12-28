import { Schema, model } from 'mongoose'

const atencionesSchema = new Schema({
    observaciones:      String,
    tratamiento:        String,
    procedimiento:      String,
    paciente: [{
        type: Schema.Types.ObjectId,
        ref: "Paciente"
    }]
})

export default model('Atenciones', atencionesSchema);