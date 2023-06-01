const  {User}  = require('../DB_connection');
const { Op } = require('sequelize');

const postUser = async(req,res)=>{
    const { email , password } = req.body;

    if(![email,password].every(Boolean)){
        return res.status(400).json({message:"Faltan datos"});
    }

    try {
        const [user,created] = await User.findOrCreate({
            where:{
                [Op.and]:[{email},{password}]
            },
            defaults: {
                email,
                password
            }
        })
        
        if(created) res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

module.exports = {
    postUser
}