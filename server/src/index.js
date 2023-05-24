const express = require('express');
const server = express();

const morgan = require('morgan');
const cors = require('cors')

const {router} = require('./routes/index')

const PORT = 3001;

server.use(morgan('dev'));

server.use(express.json());
server.use(cors())
server.use('/rickandmorty', router);

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
// });

server.listen(PORT, ()=> {
    console.log('Server running at port: ' + PORT)
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