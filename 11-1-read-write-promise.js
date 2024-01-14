const { error } = require('console')

const { readFile } = require('fs').promises

// readFile('10-1-largefile.txt','utf-8',(error,data)=>{
//     if(error)
//     console.log(error)
//     console.log(data)
// })

const fetchData = async () => {
    try {
        const data1 = await readFile('5-3-data.txt', 'utf-8')
        console.log(data1)
    }
    catch (error) {
        console.log(error)
    }
}
fetchData()