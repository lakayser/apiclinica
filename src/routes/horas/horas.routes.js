import { Router } from "express";
const router = Router()

import * as Horas from '../../controllers/horas/horamasiva.controller';
import * as Tomar from '../../controllers/horas/agendar-hora.controller';
import * as Paciente from '../../controllers/atenciones/paciente.controller';
import * as Atencion from '../../controllers/atenciones/atencion.controller';

// CRUD horasMasivas
router.post     ('/Crear-horas',                Horas.addHora)
router.get      ('/listar-horas',               Horas.listarhoras)
router.get      ('/listar-hora-especifica/:id', Horas.listarHoraId)
router.put      ('/editar-horas/:id',           Horas.editarHora)
router.delete   ('/eliminar-hora/:id',          Horas.eliminarHora)

// CRUD tomarHoras
router.post     ('/tomar-hora/:id',         Tomar.agendarHora)
router.get      ('/listar-tomadas',         Tomar.listarReserva)
router.get      ('/listar-tomada/:id',      Tomar.listarReservaId)
router.put      ('/editar-reserva/:id',     Tomar.editarReserva)
router.delete   ('/eliminar-reserva/:id',   Tomar.eliminarReserva)
// CRUD Pacientes
router.post     ('/registrar-paciente', Paciente.agregarPaciente)
router.get      ('/listar-pacientes',   Paciente.listarPacientes)
router.delete   ('/eliminar-paciente',  Paciente.eliminarPaciente)
router.put      ('/editar-paciente',    Paciente.editarPaciente)
//CRUD atenciones
router.post     ('/registrar-atencion',     Atencion.formulario)
router.get      ('/listar-atenciones',      Atencion.listarAtenciones)
export default router;