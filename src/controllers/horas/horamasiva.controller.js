import CargaMasiva from "../../models/CargaMasiva";
import HorasMasivas from "../../models/HorasMasivas";
import moment from 'moment';

export const addHora = async (req, res) => {

    try {
        moment.locale('es')
        const { horaComienzo, horaTermino, intervalo } = req.body
        const diasDiferencia = moment(horaTermino).diff(moment(horaComienzo), 'days');
        const horaLocal1 = moment(horaComienzo).add(3, 'hours')
        const horaLocal2 = moment(horaTermino).add(3, 'hours')
        const contador = intervalo
        const horario1 = moment(horaLocal1).add('09:30:00')
        const horario2 = moment(horaLocal2).add('19:30:00')

        for (var index = 0; index < 9999;) {
            const prueba = moment(horario1).add(index, 'minutes')

            const data = await CargaMasiva.find({ fecha: prueba });
            if (data.length > 0) {
                res.status(403).json({ message: "ya existen horas en ese rango" })
                index = 10000
            } else {
                const cargaMasiva = new CargaMasiva({
                    fecha: moment(prueba).format(),
                    dia: moment(prueba).format('LLLL'),
                    hora: moment(prueba).format('LT'),
                    disponibilidad: true,
                    semana: moment(prueba).format('w'),
                    estado: true
                })
                await cargaMasiva.save();
            }
            index = index + contador
            if (moment(prueba).isSameOrAfter(horario2) ) {
                index = 10000
                res.status(200).json({ message: "Las horas se han creado con exito" })
            }
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const listarhoras = async (req, res) => {
    const data = await CargaMasiva.find({ estado: true })
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "sin horas para mostrar" })
    }
}
export const listarHoraId = async (req, res) => {
    const data = await CargaMasiva.findById(req.params.id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "sin horas para mostrar" })
    }
}
export const editarHora = async (req, res) => {
    const { fecha,
        dia,
        hora,
        disponibilidad,
        semana,
        estado } = req.body;

    const data = await CargaMasiva.findByIdAndUpdate(req.params.id, {fecha,
        dia,
        hora,
        disponibilidad,
        semana,
        estado })
    if (data) {
        res.status(200).json('editado con exito')
    } else {
        res.status(400).json({ message: "hora no encontrada" })
    }
}
export const eliminarHora = async (req, res) => {
    const data = await CargaMasiva.findByIdAndUpdate(req.params.id, { estado: false })
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "tan fomes las horas, eliminen las horas" })
    }
}