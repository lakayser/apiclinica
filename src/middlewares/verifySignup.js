import Role, { ROLES } from '../models/Role';
import User from '../models/User';

export const checkRolesExisted = async (req, res, next) => {
    if ( req.body.roles ) {
        const roles = await Role.find({_id: req.body.roles});
        if ( roles.length > 0 ) {
        } else {
            return res.status(400).json("El rol no existe");
        }
    }
    next();
    
}

export const checkDuplicateName = async (req, res, next) => {
    const user = await User.findOne({userName: req.body.userName})
    if (user) return res.status(400).json({message: 'El usuario ingresado ya existe'});

    /**
     * @REPETIR En caso de que se necesiten mas campos (Ej: email)
     */
    // const user = await User.findOne({username: req.body.username})
    // if (condition) return res.status(400).json({message: 'El usuario ingresado ya existe'});

    next();

}