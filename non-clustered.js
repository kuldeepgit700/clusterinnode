const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
       res.writeHead(200, {'Content-Type' : "text/plain"});
       res.end("Home page");
    }else if(req.url === "/slowpage"){
       for(let i = 0; i < 6000000000; i++){}
       res.writeHead(200, {'Content-Type': "text/plain"});
       res.end("slow content");

    }
});

server.listen(2000, ()=>{
    console.log('server is running on port 2000');
})