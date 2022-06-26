// Design a memoization function which adds 10 to provided value and take it from cache if it was already calculated.

const add = (num) => num + 10;

const memoize = (fn) => {
    const cache = {};
    // Closure with cache
    return (...args) => {
        let arg = args[0];
        if(arg in cache) {
            console.log("Fetching from cache");
            return cache[arg]
        } else {
            console.log("Calculating first time");
            const result = fn(arg);
            cache[arg] = result;
            return result;
        }
    }
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(3)); // calculated
console.log(memoizeAdd(3)); // from cache
console.log(memoizeAdd(4)); // calculated
