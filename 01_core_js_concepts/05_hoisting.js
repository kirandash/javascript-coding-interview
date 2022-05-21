// What will be console.logged here
//
// Question 1
// console.log(foo); // error because foo is not declared with var or function, var and function declarations are hoisted
// foo = 1;

// question 2
console.log(foo2); // undefined
var foo2 = 2;
// equivalent to var foo2; console.log(foo2); and foo2 = 2;

// question 3
foo3 = 3;
console.log(foo3); // 3
var foo3;
// var foo3; foo3 = 3; console.log(foo3);
