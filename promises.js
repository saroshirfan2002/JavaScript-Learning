// Function that returns a Promise
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetching of id', id);
            resolve('success'); // Resolving the promise with 'success'
            // reject("error") // Uncomment this line to test rejection handling
        }, 2000);
    });
}

// Promise Chaining Example
getData(1)
    .then((res) => {
        console.log("Fetched data 1", res);
        return getData(2); // Returning the next promise
    })
    .then((res) => {
        console.log("Fetched data 2", res);
        return getData(3); // Returning the next promise
    })
    .then((res) => {
        console.log("Fetched data 3", res);
    })
    .catch((err) => {
        console.log("Error:", err); // Handles any errors in the chain
    });

/* 🔍 Expected Output (Each step executes after 2 seconds) 
Data fetching of id 1
Fetched data 1 success
Data fetching of id 2
Fetched data 2 success
Data fetching of id 3
Fetched data 3 success
*/
