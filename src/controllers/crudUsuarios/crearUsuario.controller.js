
import User from "../../models/User";
import jwt from 'jsonwebtoken';
import config from '../../config';
import Role from "../../models/Role";


export const signUp = async (req, res) => {
    const {userName, password, roles} = req.body;

    const newUser = User({
        userName,
        password: await User.encryptPassword(password),
        roles 
    })

    if (roles) {
        const foundRoles = await Role.find({_id: roles })
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

    res.status(200).json({message: "Usuario Creado con Exito"})
}
export const signIn = async (req, res) => {
    const userFound = await User.findOne({nameUser: req.body.nameUser}).populate("roles")

    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})
    // console.log(userFound);

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: "Contrasena invalida"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
}

export const listUsers  = async (req, res) => {
    try {
        const user = await User.find({}).populate("roles");
        if ( !user ) return res.status(400).json({Message: "No se encontraron usuarios"}); return res.status(200).json(user);
    } catch ( err ) { res.status(400).json({ Message: "Ha ocurrido un error al listar los usuarios" }); }
}