const {Favorite} = require('../DB_connection')
const { Op } = require('sequelize')

const postFav = async(req,res)=>{
    const {id,origin,name,status,image,species,gender} = req.body
    if(![id,name,status,image,species,gender].every(Boolean)){
        return res.status(400).json({message:"Faltan datos"});
    }

    try {
        const [favChar,created] = await Favorite.findOrCreate({
            where:{
                [Op.and]:[{id},{origin},{name},{status},{species},{gender},{image}]
            },
            defaults:{
                id,
                name,
                origin,
                species,
                status,
                image,
                gender
            }
        })

        const allfavs = await Favorite.findAll();

         res.status(200).json(allfavs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    postFav
}