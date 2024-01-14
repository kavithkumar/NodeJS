const http = require('http')
const server = http.createServer(function (request, response) {



    const fs = require('fs')
    //synchronous
    const data = fs.readFileSync('3-moduledemos.js', 'utf-8')
    //asynchronous
    // const data = fs.readFile('3-moduledemos.js', 'utf-8', (error, data) => {
    //     if (error)
    //         console.log(error)
    //     else console.log(data)
    // })
    // function readData(filename){

    //      data=fs.readFile('3-moduledemos.js', 'utf-8', (error, data) => {
    //              if (error)
    //                  console.log(error)
    //              else console.log(data)
    //          })
    //          return data;
    // }
    for (var i = 0; i < 100; i++);
    response.end(data)

    // console.log(i)
})
// module.exports=readData

server.listen(8085)