const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++)
    writeFileSync('10-1-largefile.txt', `Hello World... ${i} \n`, { flag: 'a' })