// Write an asynchronous function which executes callback after finishing it's asynchronous task
// What problem callbacks solve?
const asyncFn = callback => setTimeout(() => {
    callback();
}, 3000);

asyncFn(() => console.log("callback done!"));
