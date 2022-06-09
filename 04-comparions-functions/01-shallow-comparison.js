// Design a Shallow Comparison Function

// typeOf utility fn to return more accurate type as string ex: array, object etc. Native typeof will return object for both obj and array
const typeOf = (input) => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1];
    return type;
}

console.log(typeOf(1)) // number
console.log(typeOf({a: 1})) // object
console.log(typeOf([1,2,5])) // array (object in native)

const shallowComparison = (source, target) => {
    // type check
    if(typeOf(source) !== typeOf(target)) return false;

    // array data check
    if(typeOf(source) === "array") {
        if(source.length !== target.length) return false;
        return source.every((el, idx) => el === target[idx]);
    }

    // object data check
    if(typeOf(source) === "object") {
        if(Object.keys(source).length !== Object.keys(target).length) return false;
        return Object.keys(source).every(key => source[key] === target[key])
    }

    // date data check
    if(typeOf(source) === "date"){
        return source.getTime() === target.getTime()
    }

    // primitive data check
    return source === target;
}

console.log(shallowComparison(1, 1)); // true
console.log(shallowComparison(1, 2)); // false
console.log(shallowComparison({a: 1}, {a: 1})); // true
console.log(shallowComparison({a: 1}, {a: 2})); // false
console.log(shallowComparison({a: 1}, {b: 1})); // false
console.log(shallowComparison([1,2], [1,2])); // true
console.log(shallowComparison([1,2], [1,2,3])); // false
console.log(shallowComparison(new Date(2018, 11, 24, 10, 33, 30, 0), new Date(2018, 11, 24, 10, 33, 30, 0))); // true
console.log(shallowComparison(new Date(2018, 11, 24, 10, 33, 30, 0), new Date(2018, 11, 24, 10, 33, 30, 1))); // false
