import Atenciones from "../../models/Atenciones";

export const formulario = async (req,res)=>{
    const { enfermedadR, observaciones, tratamiento, nombre, Edad, numeroContacto, numeroEmergencia, rut} = req.body;
    const atencion = new Atenciones({ enfermedadR, observaciones, tratamiento, nombre, Edad, numeroContacto, numeroEmergencia, rut})
     
    await atencion.save()
    
     res.status(200).json("Atencion guardada con exito")

}

export const listarAtenciones = async (req, res) => {
    try {
        const atencion = await Atenciones.find({});
        if (!atencion) return res.status(400).json({ Message: "No se encontraron atenciones" }); return res.status(200).json(atencion);
    } catch (err) { res.status(400).json({ Message: "Ha ocurrido un error al listar las atenciones" }); }
}
export const listarAtencionEspecifica =async (req,res) => {
    const data = await Atenciones.find({ _id: req.params._id });
    if ( data ) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ Message: "La atencion no ha sido encontrada" })
    }
}
