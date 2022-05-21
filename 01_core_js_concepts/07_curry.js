// 1. Write a function which helps to achieve multiply(a)(b) and returns product of a and b
const multiply = (a) => (b) => a * b;

console.log(multiply(2)(30));

// 2. Create a curry function
// Ex: const curriedSum = curry((a, b ,c) => a + b + c)
// Using function and var instead of arrow fn and let because such codes are in libraries and it's better to be compatible
const curry = function (fn) {
    const arity = fn.length;
    return function f1 (...args) {
        if(args.length >= arity) {
            console.log("enough args")
            // execute the fn
            return fn(...args)
        } else {
            console.log("not enough args")
            // expose another function to user
            return function f2(...moreArgs) {
                const newArgs = args.concat(moreArgs);
                return f1(...newArgs)
            }
        }
    }
};

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(1)); // should return a fn
console.log(curriedSum(1)(2, 3)) // 6
console.log(curriedSum(1)(2)(3)) // 6
console.log(curriedSum(1, 2, 3, 4)) // 6

// What can your curried function do?
const get = curry((property, object) => object[property])
const getId = get('id') // curried fn
console.log(get('id', { id: 1, name: "test" }));
console.log(getId({ id: 2 }))

const map = curry((fn, values) => values.map(fn))
const getArrayOfIds = map(getId);
console.log(getArrayOfIds([ { id: 1 }, { id: 3 } ]))
