import { Router } from "express";
const router = Router()

 import * as CrearusuarioController from '../controllers/crudUsuarios/crearUsuario.controller';
import {verifySignup} from '../middlewares';

// router.get('/', authCtrl);
router.post('/crear-usuario',[verifySignup.checkDuplicateName, verifySignup.checkRolesExisted], CrearusuarioController.signUp)
router.get('/listar-usuarios', CrearusuarioController.listUsers)
router.post('/login', CrearusuarioController.signIn)

export default router;