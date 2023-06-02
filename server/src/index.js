const express = require('express');
const server = express();

const morgan = require('morgan');
const cors = require('cors')

const {router} = require('./routes/index')
const { conn } = require('./DB_connection');

const PORT = 3001;

server.use(morgan('dev'));

server.use(express.json());
server.use(cors())
server.use('/rickandmorty', router);

//Para toda aquella ruta que no tenga /rickandmorty dara un error 404 Not Found
server.use("*",(req,res)=>{
    res.status(404).json({error:'Not Found'})
})

server.listen(PORT, async()=> {
    console.log('Server running at port: ' + PORT)
    await conn.sync({alter:true})
    console.log('Entramos a la DB')
});











































// const http = require("http")

// const getCharById = require("./controllers/getCharById")

// http.createServer((request,response) => {
    
//     response.setHeader('Access-Control-Allow-Origin', '*');    
    
//     // if(request.url.includes("/rickandmorty/character")){

//     //     const id = request.url.split('/').at(-1)
//     //     const char = data[id-1]
        
//     //     return response.writeHead(200,{"Content-Type":"application/json"}).end(JSON.stringify(char))
//     // }

//     if(request.url.includes("/rickandmorty/character")){
//         const id = request.url.split('/').at(-1);
//         getCharById(response,id);
//     }

// }).listen(3001,"127.0.0.1")