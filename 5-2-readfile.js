// const file=require('fs')
// using file we can call any methods in the module FILESYSTEM
// file.readFileSync



const { readFileSync, writeFileSync } = require('fs')
console.log('Reading the data from the file')
const data1 = readFileSync('5-data1.js', 'utf-8')
const data2 = readFileSync('5-1-data2.js', 'utf-8')
console.log('Read operation Completed')
writeFileSync('5-3-data.txt', `User Details ${data1} ${data2}`)
console.log('Done Writing...')