//producer-return promise object
const calculate = (value) => {
    return new Promise((resolve, reject) => {
        //resolve-success
        //reject-error
        if (value)
            resolve(value + 2);
        else
            reject("Data is undefined")
    })
}

//Method 1
// calculate(5)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

//if resolve it will execute .then callback
//if reject it will execute .catch callback

//Method 2
const asyncfunc = async () => {//call producer function synchronusly
    try {
        const data = await calculate(10); //await for the data
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
asyncfunc()