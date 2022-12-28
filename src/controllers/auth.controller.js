import User from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from "../models/Role";

// export const index = async (req, res) => {
//     res.json({"Title": "Hola"})
// }

export const signUp = async (req, res) => {
    const {nameUser, password, roles} = req.body;

    // const userFound = User.find({nameUser})

    const newUser = User({
        nameUser,
        password: await User.encryptPassword(password),
    })

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    // console.log(newUser);

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.status(200).json({token})
  
}
export const signIn = async (req, res) => {
    const userFound = await User.findOne({nameUser: req.body.nameUser}).populate("roles")
    const userFound2 = await User.find({nameUser: req.body.nameUser});

    console.log(userFound)

    const rl  = userFound.map(rol => rol.roles);

    const rol          = rl.toString(rl);
    console.log(rol)
    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})
    // console.log(userFound);

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: "Contrasena invalida"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })
    
    res.json({token, rl})
}