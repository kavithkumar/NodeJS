const { error } = require('console')
const fs = require('fs')
fs.readFile('10-1-largefile.txt', (error, data) => {
    if (error)
        console.log(error)
    else console.log(`The size of data is ${data.length / 1024} KB`)
})