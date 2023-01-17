const http = require('http');
const fs = require('fs');

//For creating html file
fs.writeFile('index.html',' <h1>HELLO WORLD</h1>  \n  <p> This is Sravan Kumar <p> ',(err)=>{console.log(err)});

const server = http.createServer((req,res)=>{

    //reading the content from file
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.write(data);
        res.end();
    })
})

server.listen(5000,()=>{
    console.log('server started at the port 5000');
})