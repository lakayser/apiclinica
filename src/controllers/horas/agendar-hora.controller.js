import { validateRUT, getCheckDigit, generateRandomRUT } from 'validar-rut'
import CargaMasiva from '../../models/CargaMasiva';
import HoraTomada from '../../models/HoraTomada';


export const agendarHora = async (req, res) => {
    const { nombre, rut, numero } = req.body
    const id = req.params.id
    const data = await CargaMasiva.find({ _id: id, disponibilidad: true })
    if (data) {
        const horatomada = new HoraTomada({ nombre, rut, numero, horaTomada: req.params.id, estado: true })
        await horatomada.save()
        const reservar = await CargaMasiva.findByIdAndUpdate(id, { disponibilidad: false })
        res.json("Hora agendada correctamente")

    } else {
        res.json("No se encontraron horas para mostrar")
    }
}
export const listarReserva = async (req, res) => {
    const data = await HoraTomada.find({}).populate("horaTomada")
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "sin horas para mostrar" })
    }
}
export const listarReservaId = async (req, res) => {
    const data = await HoraTomada.findById(req.params.id).populate("horaTomada")
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "sin horas para mostrar" })
    }
}
export const editarReserva = async (req, res) => {
    const { nombre, rut, numero } = req.body;
    const data = await HoraTomada.findByIdAndUpdate(req.params.id, { nombre, rut, numero })
    if (data) {
        res.status(200).json('editado con exito')
    } else {
        res.status(400).json({ message: "hora no encontrada" })
    }
}
export const eliminarReserva = async (req, res) => {

    const data = await HoraTomada.findByIdAndUpdate(req.params.id, { estado: false })
    const data2 = await HoraTomada.find({ _id: req.params.id })
    const id = data2.map(id => id.horaTomada)
    const data3 = await CargaMasiva.findByIdAndUpdate(id, { disponibilidad: true })
    if (data) {
        if (data2) {
            if (data3) {
                res.status(200).json('Hora cancelada con exito!')
            } else {
                res.status(400).json({ message: "La hora seleccionada no tiene una reserva asiganda" })
            }
        } else {
            res.status(400).json({ message: "La reserva no existe" })
        }

    } else {
        res.status(400).json({ message: "La reserva no existe" })
    }
}