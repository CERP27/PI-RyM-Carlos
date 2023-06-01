const {Favorite} = require('../DB_connection');
const { Op } = require('sequelize');

const deleteFav = async(req,res)=>{
    const {id} = req.params;

    try {
        const deletedChar = await Favorite.destroy({
            where:{
                id
            }
        });
        
        const favs = await Favorite.findAll();
        return res.status(200).json(favs);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    deleteFav
}