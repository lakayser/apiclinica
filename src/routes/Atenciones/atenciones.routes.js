import { Router } from "express";
const router = Router()

import * as Paciente from '../../controllers/atenciones/paciente.controller';
import * as Atencion from '../../controllers/atenciones/atencion.controller';



//CRUD Pacientes
router.post     ('/registrar-paciente', Paciente.agregarPaciente)
router.get      ('/listar-pacientes',   Paciente.listarPacientes)
router.delete   ('/eliminar-paciente',  Paciente.eliminarPaciente)
router.put      ('/editar-paciente',    Paciente.editarPaciente)

// CRUD Atenciones

export default router;