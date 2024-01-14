const http = require('http')
var count = 0;
const server = http.createServer((request, response) => {
    response.end("Hello...")
})
server.on('connection', () => {
    console.log('server connected...')
})
server.on('request', (request, response) => {
    count++;
    console.log('Request is recieved...')
    console.log(`Visitors ${count}`)
})
server.listen(8080)