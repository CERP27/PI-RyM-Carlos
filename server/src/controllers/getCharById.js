const axios = require("axios");

const URL="https://rickandmortyapi.com/api/character";

// const getCharById = (req,res)=>{

//     const {id}= req.params;
    
//     axios(`${URL}/${id}`)
//     .then(response => response.data)
//     .then(({status,name,origin,species,image,gender}) => {  
//         if(name){
//             const character = {
//                 id,
//                 status,
//                 name,
//                 origin:origin.name,
//                 image,
//                 gender,
//                 species
//             }   

//             return res.status(200).json(character)                    
//         }       
        
//     })        
//     .catch ((error)=>{
//         error.response.status === 404 ? res.status(error.response.status).send('Not Found') : res.status(error.response.status).send(error.message)
//     }) 
        
// }

//CODIGO CON ASYNC AWAIT
const getCharById = async (req,res) =>{
    const {id}= req.params;

    try {
        const { data } = await axios(`${URL}/${id}`);
        const { name, status, species, gender, origin, image} = data
        const character = {
            id:+id,
            name,
            status,
            species,
            origin:origin.name,
            image,
            gender
        }
        return res.status(200).json(character)
        
    } catch (error) {
        error.response.status === 404 ? res.status(error.response.status).send('Not Found') : res.status(error.response.status).send(error.message)
    }
}

module.exports = {getCharById}














// module.exports = getCharById = (res,id)=>{
// axios(`https://rickandmortyapi.com/api/character/${id}`)
// .then(response => response.data)
// .then(data => {
//     const char = {
//         id:id,
//         name:data.name,
//         gender:data.gender,
//         species:data.species,
//         origin:data.origin?.name,
//         image:data.image,
//         status:data.status
//     }
//     res.writeHead(200,{"Content-Type":"application/json"}).end(JSON.stringify(char))
// })
// .catch(error => res.writeHead(500,{"Content-Type":"text/plain"}).end(error.message))

// }




