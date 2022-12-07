import Role from '../models/Role';

export const showRoles = async (req, res) => {
    let showRoles = await Role.find({});
    res.json(showRoles)
}