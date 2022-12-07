import RoleModule from '../../models/Role';

export const listarRoles = async(req, res)=>{
    const roles = await RoleModule.find({})
    res.status(200).json(roles);
}