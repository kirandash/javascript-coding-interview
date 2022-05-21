// Remove all duplicates in the array
const uniqueArr = (arr) => [...new Set(arr)];

// Don't use breadcrumb appraoch and it will not sort and also it will return strings
const uniqueArr2 = (arr) => {
    const breadCrumb = {}
    arr.forEach(i => breadCrumb[i] = true);
    return Object.keys(breadCrumb);
}

const uniqueArr3 = (arr) => {
    const result = [];
    arr.forEach(i => {
        if(!result.includes(i)) { result.push(i) }
    })
    return result
}

const uniqueArr4 = arr => arr.reduce((acc, item) => !acc.includes(item) ? [...acc, item] : acc, [])

console.log(uniqueArr([2,2,2,3,4,5,1]));
console.log(uniqueArr2([2,2,2,3,4,5,1]));
console.log(uniqueArr3([2,2,2,3,4,5,1]));
console.log(uniqueArr4([2,2,2,3,4,5,1]));
console.log(uniqueArr([{ id: 1 }, { id: 1 }]));
