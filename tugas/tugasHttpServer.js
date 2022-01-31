const http = require('http');
const fs = require('fs');
const PORT = 3000;

function onRequest(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("../tugasHttpServer.html", null, (err, data)=>{
        if(err){
            res.writeHead(400)
            res.write("Server Error")
        }else{
            res.write(data)
        }
        res.end()
    })
}

http.createServer(onRequest).listen(PORT, () => {
  console.log("Server Running");
});