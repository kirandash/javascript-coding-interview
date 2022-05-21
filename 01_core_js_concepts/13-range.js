// Write a fn which implement range
// available in most helper libraries ex: lodash or lamda
const range = (start, end) => {
    let result = [];
    while(start <= end) {
        result.push(start)
        start++
    }
    return result
}

console.log(range(1, 10)); // 1,2,3,...10

// Best soln with Array
const range2 = (start, end) => [...Array(end - start + 1).keys()].map(i => i + start);

console.log(range2(10, 22));
