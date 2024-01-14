const http = require('http')

const server = http.createServer(function (request, response) {
    if (request.url == '/') return responseText(request, response)
    if (request.url == '/json') return responseJson(request, response)
    requestNotFound(request, response)
})

function responseText(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hi')
}

function responseJson(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 'name': 'john', 'age': 20, 'numbers': [1, 2, 3, 4, 5, 6] }))
}

function requestNotFound(request, response) {
    response.writeHead(404,{'Content-Type':'text/plain'})
    // response.setHeader('Content-Type', 'text/plain')
    response.end('Requested Resource Not Found')
}

server.listen(8080)