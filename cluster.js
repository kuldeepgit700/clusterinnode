const cluster = require('cluster');
const http = require('http');
const OS = require('node:os');

const numOfCpus = OS.cpus().length
console.log(numOfCpus)
// console.log('total cpus',OS.cpus());

if(cluster.isMaster){
   console.log(`master process ${process.pid} is running`);
   cluster.fork();
   cluster.fork();
}else{
     console.log(`worker ${process.pid} started`);
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
}