const fs = require('fs')
const stream = fs.createReadStream('10-1-largefile.txt')
stream.on('data', (chunk) => {
    console.log(`Recieved ${chunk.length} of data`)
})
stream.on('end', () => {
    console.log('end of the file is reached')
})
stream.on('error', (err) => {
    console.log(err)
})