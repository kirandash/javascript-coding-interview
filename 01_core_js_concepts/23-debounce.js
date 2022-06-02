// Create a debounce fn
/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place
 * before time has elapsed.
 */
const debounce = (fn, delay = 300) => {
    let timeOut;
    return (...args) => {
        // Check for existing calls and Reset timer
        if(timeOut) clearTimeout(timeOut);
        // save instance of current timer
        // Invoke fn
        timeOut = setTimeout(() => fn.apply(this, args), delay);
    }
}

const saveInput = (name) => console.log(`${name} saved input`);
const processChange = debounce(saveInput, 3000);

// No matter how many times the debounce fn is called, it will only execute once after 3 sec
console.log(processChange("Kiran"), processChange("Mama"), processChange("Mama"), processChange("Mama"))
