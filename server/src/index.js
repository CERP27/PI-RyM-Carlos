const http = require("http")
const data = require("./utils/data")

http.createServer((request,response)=>{
    
    response.setHeader('Access-Control-Allow-Origin', '*');    
    
    if(request.url.includes("/rickandmorty/character")){

        const id = request.url.split('/:').at(-1)
        const char = data[id-1]
        
        return response.writeHead(200,{"Content-Type":"application/json"}).end(JSON.stringify(char))
    }

}).listen(3001,"127.0.0.1")