// 📌 Example of Synchronous Code
console.log("Step 1: Start");
console.log("Step 2: Processing...");
console.log("Step 3: End");

// 🔍 Output:
// Step 1: Start
// Step 2: Processing...
// Step 3: End

// Example: Passing Arguments to setTimeout()
function greet(name) {
    console.log(`Hello ${name}`);
}

console.log("Hello Alice before greet function");
// setTimeout will execute 'greet' after 2 seconds, passing 'Alice' as an argument
setTimeout(greet, 2000, 'Alice');
console.log("Hello Alice after greet function");

// 🔍 Output:
// Hello Alice before greet function
// Hello Alice after greet function
// Hello Alice

// 🔹 Clearing setTimeout() with clearTimeout()
console.log("Hello Alice before greet function");
let id = setTimeout(greet, 2000, 'Alice');
clearTimeout(id); // Cancels the timeout before it executes
console.log("Hello Alice after greet function");

// 🔍 Output:
// Hello Alice before greet function
// Hello Alice after greet function

// setInterval() runs a function repeatedly at a fixed time interval.
let count = 0;
let interval = setInterval(() => {
    console.log(`Message ${++count}`);
    if (count === 5) {
        clearInterval(interval); // Stops after 5 times
    }
}, 1000);

// ✅ This will print 5 messages, then stop.

// Example: setTimeout() with an anonymous function
setTimeout(() => {
    console.log("hello");
}, 2000);

// Example: setTimeout() with a named function
function greet() {
    console.log("hello 2");
}
setTimeout(greet, 2000);

// Example: Callback Hell (Nested Callbacks)
function step1(id, callback) {
    setTimeout(() => {
        console.log("data ", id);
        callback();
    }, id * 1000); // Executes after 'id' seconds
}

function final() {
    console.log("All steps completed!");
}

// Calling functions in a nested way (Callback Hell)
step1(1, () => {
    step1(7, () => {
        step1(4, final);
    });
});
