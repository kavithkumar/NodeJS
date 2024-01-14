const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
    //This is the main thread
    //Create a new worker thread and pass data to it
    const worker = new Worker(__filename, {
        workerData: { number: 5 }  // You can pass any data neede by the worker thread
    });
    //Listen for messages from the worker thread
    worker.on('message', result => {
        console.log(`Factorial result: ${result}`);
    });
    //Listen for errors from the worker thread
    worker.on('error', err => {
        console.error(err)
    });
    //Listen for the worker thread to exit
    worker.on('exit', code => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    })
}
else {
    //This is the worker thread
    //Perform the factorial calculation
    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * calculateFactorial(n - 1);
        }
    }
    //Get data from the main thread
    const { number } = workerData;
    //Calculate factorial and send the result back to the main thread
    const result = calculateFactorial(number);
    parentPort.postMessage(result);
}