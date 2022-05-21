// Create a counter function which has increment and getValue functionality
const privateCounter = () => {
    let count = 0;
    return {
        increment: (val = 1) => {
            count += val
        },
        getValue: () => count
    }
}

const counter = privateCounter();
counter.increment()

console.log(counter.getValue())

counter.increment();

console.log(counter.getValue())

console.dir(counter.getValue)
