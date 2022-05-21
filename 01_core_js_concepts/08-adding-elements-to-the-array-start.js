// Write a function which get's an array and an element and returns a array with this element at the end

// Beginner Sol
const num = [1, 2, 3]
const appendToArray = (arr, elem) => {
    // Array push modifies the original array
    arr.push(elem);
    return arr
}

// Advanced Sol - Use spread operator
const appendToArray2 = (arr, elem) => [...arr, elem]

console.log(appendToArray(num, 4))

console.log(appendToArray2(num, 4))

console.log(num)
