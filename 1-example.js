const readData = require("./4-fsdemos")

const http = require('http')
const server = http.createServer(function (request, response) {
    response.end(readData())
})
server.listen(8080)//start the server