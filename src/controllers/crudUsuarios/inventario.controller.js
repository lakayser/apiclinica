import Inventario from "../../models/Inventario";


export const agregarObjeto = async (req,res)=>{
 const {nombre, descripcion, cantidad} = req.body

 const articulo = new Inventario({nombre, descripcion, cantidad})

 await articulo.save()

 res.json("Articulo agregado correctamente")
}

export const listarInventario = async (req,res) =>{
    try {
        const articulo = await Inventario.find({});
        if (!articulo) return res.status(400).json ({Message: "no se encuentran objetos en el inventario"}); return res.status(200).json(articulo);
    } catch (err){res.status(400).json ({Message: "Eroor al buscar en el inventario"});}
}