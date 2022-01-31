const http = require('http');
const PORT = 3000;

function onRequest(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"})
    const dataJson = {
        nama : "Ari Cahyono",
        peserta: "SYNRGY Academy"
    }
    res.end(JSON.stringify(dataJson));
}

http.createServer(onRequest).listen(PORT, ()=>{
    console.log("Server Running");
});