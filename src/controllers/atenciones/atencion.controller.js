import Atenciones from "../../models/Atenciones";

export const formulario = async (req,res)=>{
    const { enfermedadR, observaciones, tratamiento} = req.body;
    const data = Atenciones({ enfermedadR, observaciones, tratamiento} )
     
     res.status(200).json("Atencion guardada con exito")

}

export const listarAtenciones = async (req, res) => {
    try {
        const atencion = await Atenciones.find({});
        if (!atencion) return res.status(400).json({ Message: "No se encontraron atenciones" }); return res.status(200).json(atencion);
    } catch (err) { res.status(400).json({ Message: "Ha ocurrido un error al listar las atenciones" }); }
}