import { Router } from "express";
const router = Router()

import * as Horas from '../../controllers/horas/horamasiva.controller';

// router.get('/', authCtrl);
router.post('/Crear-horas', Horas.addHora)
router.get('/listar-horas', Horas.listarhoras)
router.get('/listar-hora-especifica/:id', Horas.listarHoraId)
router.put('/editar-horas/:id', Horas.editarHora)
router.delete('/eliminar-hora/:id', Horas.eliminarHora)

export default router;