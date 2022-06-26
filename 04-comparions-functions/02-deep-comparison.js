// Design a Deep Comparison Function

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

const deepComparison = (source, target) => {
    // type check
    if(typeOf(source) !== typeOf(target)) return false;

    // array data check
    if(typeOf(source) === "array") {
        if(source.length !== target.length) return false;
        // return source.every((el, idx) => el === target[idx]);
        // calling deepComparison RECURSIVELY
        return source.every((el, idx) => deepComparison(el, target[idx]));
    }

    // object data check
    if(typeOf(source) === "object") {
        if(Object.keys(source).length !== Object.keys(target).length) return false;
        // return Object.keys(source).every(key => source[key] === target[key])
        // calling deepComparison RECURSIVELY
        return Object.keys(source).every(key => deepComparison(source[key], target[key]))
    }

    // date data check
    if(typeOf(source) === "date"){
        return source.getTime() === target.getTime()
    }

    // primitive data check
    return source === target;
}

console.log(deepComparison([1,2, [1, 2, 3]], [1,2, [3, 4, 5]])); // false
console.log(deepComparison([1,2, [1, 2, 3]], [1,2, [1, 2, 3]])); // true
console.log(deepComparison({a: {b: 1}}, {a: {b: 2}})); // false
console.log(deepComparison({a: {b: 1}}, {a: {b: 1}})); // true
