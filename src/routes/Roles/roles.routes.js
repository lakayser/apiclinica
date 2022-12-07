import { Router } from "express";
const router = Router()

import * as Roles from "../../controllers/crudRoles/roles.controller"
import {verifySignup} from '../../middlewares';

// router.get('/', authCtrl);
router.get('/listar-roles', Roles.listarRoles)


export default router;