/**
 * Throttle limits the number of `fn()` executions until `time` has elapsed.
 *
 */
const throttle = (fn, delay = 300) => {
  let timeout;
  return (...args) => {
    // Check for existing calls, If timer is already running, exit
    if (timeout) return null;
    // save instance of current timer
    timeout = setTimeout(() => {
      fn.apply(this, args);
      // Clear timeout to unblock next call
      timeout = null;
    }, delay);
  };
};

const saveInput = (name) => console.log(`${name} saved input`);
const processChange = throttle(saveInput, 3000);
processChange("Kiran");
processChange("Mama");
processChange("Mama");
processChange("Mama");

setTimeout(() => processChange("Bulbul"), 5000);
