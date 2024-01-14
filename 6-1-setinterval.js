console.log('start')
const id = setInterval(() => {
    console.log('Hello...');
}, 5000)
setTimeout(() => {
    clearInterval(id);
    console.log("setInterval callback function is stopped after 5 seconds")
}, 11000);
console.log('end')