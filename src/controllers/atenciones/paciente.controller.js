import Paciente from "../../models/Paciente";

import { validateRUT, getCheckDigit, generateRandomRUT } from 'validar-rut'

export const agregarPaciente = async (req, res) => {
    const {nombre, fechaNac, numeroContacto, numeroEmergencia, rut,  enfermedadR } = req.body;
    const validarRut = validateRUT(rut)
    if (validarRut) {  
     const nuevoPaciente = Paciente({nombre, fechaNac, numeroContacto, numeroEmergencia, rut, enfermedadR});
    console.log('holaaaaaa')
    const guardarPaciente = await nuevoPaciente.save();
    return res.status(200).json("paciente creado con exito")
    } else{
      return  res.status(404).json("rut incorrecto")
    }
    
    
    // const validatorRut = validateRUT(rut);
    // if (validatorRut) {
    //     const guardarPaciente = await nuevoPaciente.save();
    //     return res.status(200).json("paciente creado con exito")

    // } else {
    //     res.status(400).json("El Rut ingresado no es válido");
    // }
}
export const listarPacientes = async (req, res) => {
    try {
        const paciente = await Paciente.find({});
        if (!paciente) return res.status(400).json({ Message: "No se encontraron pacientes" }); return res.status(200).json(paciente);
    } catch (err) { res.status(400).json({ Message: "Ha ocurrido un error al listar los pacientes" }); }
}
export const listarPacientesEspecifico = async(req, res) => {
    const data = await Paciente.find({_id: req.params.id})
    if ( data ) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ Message: "El paciente no ha sido encontrado" })
    }
}
export const editarPaciente = async (req, res) => {
    const { nombre,
        fechaNac,
        numeroContacto,
        numeroEmergencia, rut, enfermedadR } = req.body;

    const editarPaciente = await Paciente.findByIdAndUpdate(req.params.id, {nombre, fechaNac, numeroContacto, numeroEmergencia, rut, enfermedadR});
    if (!editarPaciente) return res.status(400).json("No se pudo editar el paciente")
    return res.status(200).json("Paciente editado satisfactoriamente");
}

export const eliminarPaciente = async (req, res) => {
    const eliminarPaciente = await Paciente.findByIdAndDelete( req.params.id );
    if ( !eliminarPaciente ) return res.status(400).json("No se pudo eliminar el paciente")
    res.status(200).json("Paciente eliminado satisfactoriamente");
}