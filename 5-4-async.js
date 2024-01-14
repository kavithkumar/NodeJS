const { error } = require('console')
const { readFile, writeFile } = require('fs')
console.log('Reading the data')
// const data1 = readFile('5-data1.js', 'utf-8', (error, data1) => {
//     if (error)
//         console.log(error)
//     else console.log(data1)

//     const data2 = readFile('5-1-data2.js', 'utf-8', (error, data2) => {
//         if (error)
//             console.log(error)
//         else console.log(data2)


//         writeFile('5-5-dataasync.txt', `UserDetails ${data1} ${data2}`, (error) => {
//             if (error)
//                 console.log(error)
//         })
//     })
// })

    writeFile('5-6-dataasync1.txt',`HelloWorld`,{flag:'a'},(error)=>{
        if (error)
        console.log(error)
    })