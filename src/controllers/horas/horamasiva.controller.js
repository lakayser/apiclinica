import CargaMasiva from "../../models/CargaMasiva";
import HorasMasivas from "../../models/HorasMasivas";
import moment from 'moment';

export const addHora = async (req, res) => {

    try {
        moment.locale('es')
    //     const { horaComienzo, horaTermino } = req.body
    //     const primerDia = moment(horaComienzo, "YYYY-MM-DD");
    //     const ultimoDia = moment(horaTermino, "YYYY-MM-DD");

    //     const diferencia = ultimoDia.diff(primerDia, 'days');

    //     const fechas = [];
    //     for (let index = 0; index <= diferencia; index++) {
    //         fechas.push(moment(horaComienzo, "YYYY-MM-DD").add(index, 'd').format('L'));
    //     }

    //     const arreglo = ["09:00 ", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]

    //     const math = (diferencia + 1) * arreglo.length;

    //     console.log(`Son ${math} registros`);
        
    //     for (let index = 0; index < fechas.length; index++) {
    //         for (let index2 = 0; index2 < arreglo.length; index2++) {
    //             const data = await CargaMasiva.find({ fecha: moment(fechas[index], "DD-MM-YYYY"), horario: arreglo[index2] });
    //             if (data.length > 0) {
    //                 res.status(400).json("Esta hora ya existe", data);
    //             } else {
    //                 const cargaMasiva = new CargaMasiva({
    //                     fecha: moment(fechas[index], "DD-MM-YYYY"),
    //                     dia: moment(fechas[index], "DD-MM-YYYY").format('dddd'),
    //                     hora: arreglo[index2],
    //                     disponibilidad: true,
    //                     semana: moment(fechas[index], "DD-MM-YYYY").format('w'),
    //                     estado: true
    //                 });
    //                  console.log(cargaMasiva)
    //                 // await cargaMasiva.save();
                    
    //             }
    //         }
    //     }
    //     res.json("Horas creadas");

    // } catch (error) {
    //     res.status(400).json(error)
    // }
        const { horaComienzo, horaTermino, intervalo } = req.body
        const diasDiferencia = moment(horaTermino).diff(moment(horaComienzo), 'days');
        const horaLocal1 = moment(horaComienzo).add(3, 'hours')
        const horaLocal2 = moment(horaTermino).add(3, 'hours')
        const contador = intervalo
        const horario1 = moment(horaLocal1).add('09:30:00')
        const horario2 = moment(horaLocal2).add('19:30:00')
        const horacomparacion = moment('20:00', 'HH:mm').format('LT')

        
     
        for (var index = 0; index < 1000000;) {
            const prueba = moment(horario1).add(index, 'minutes')
            // console.log(moment(prueba).format('LT'))
            const horatexto = moment(prueba).format('LT')
          
          
            if (moment(prueba).format('dddd') != 'sábado' && moment(prueba).format('dddd') != 'domingo' ) {
                const data = await CargaMasiva.find({ fecha: prueba });
                
                if (moment(prueba).format('LT').toString() == horacomparacion.toString()) {
                    // console.log("termina")
                   index = index + 780
                    // console.log(prueba)
                 // moment(prueba).add(1, 'day')
                } else{
                    if (data.length > 0) {
                        res.status(403).json({ message: "ya existen horas en ese rango" })
                        index = 10000
                    } else {
                        const cargaMasiva = new CargaMasiva({
                            fecha: moment(prueba).format(),
                            dia: moment(prueba).format('dddd'),
                            hora: moment(prueba).format('LT'),
                            disponibilidad: true,
                            semana: moment(prueba).format('w'),
                            estado: true
                        })
                         await cargaMasiva.save();
                        // console.log(cargaMasiva)
                    }
                }
                
            } else{
                index = index + 930
            } 
            index = index + contador
            if (moment(prueba).isSameOrAfter(horario2) ) {
                index = 1000001
                res.status(200).json({ message: "Las horas se han creado con exito" })
            }
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


export const listarhoras = async (req, res) => {
    // const sabado = await CargaMasiva.findByIdAndDelete({ dia: "sábado" })
    // const dom = await CargaMasiva.findByIdAndDelete({ dia: "domingo" })
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

    const data = await CargaMasiva.findByIdAndUpdate(req.params.id, {
        fecha,
        dia,
        hora,
        disponibilidad,
        semana,
        estado
    })
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
        res.status(400).json({ message: "Hora no encontrada" })
    }
}