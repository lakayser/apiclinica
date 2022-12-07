import express from "express";
import morgan from "morgan";
import cors from 'cors';

import { createRoles } from './libs/initialSetup';

import authRoutes       from './routes/authentication/auth.routes';
import UsersRoutes from './routes/users.routes';
import rolesRoutes from './routes/Roles/roles.routes';
import horasRoures from './routes/horas/horas.routes';
const app = express()
createRoles();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({Message: "Hola"})
})

app.use('/botmilaAPI/auth', authRoutes)
app.use('/Clinica', UsersRoutes,rolesRoutes,horasRoures)




export default app;