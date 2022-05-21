# JS Coding Interview

## 01 Core JS Concepts

### 01.03 Mapping users to get usernames

- `const sortedActiveNames = users.sort((a, b) => b.age - a.age).filter(i => i.isActive).map(i => i.name);`

### 01.04 Diff b/w null and undefined

- null is an intentional assignment and type of it is an object
- typeof null: object, typeof undefined: undefined
- Ideally it's upto devs to use either null or undefined. I prefer null.
- But in somecases undefined makes sense ex: finding a non existing item in array returns undefined

### 01.05 Hoisting

- var and function keyword declarations are hoisted or bubbled to the top
- let and const are not bubbled

### 01.06 Closures

- Gives access to inside of a fn to outside scope
- closure is a private fn which returns a fn or an object of fn that can be accessed from outside scope
- Widely used in JS

### 01.07 Currying

- `const multiply = a => b => a * b;`
- What can your curried function do?
  - To help write JS in a functional way

### 01.08 Add Elems to Array

- `array.push`: will mutate the original array
- `[...arr]`: use spread operator
- The second fn is a pure function: a pure fn is a fn which doesn't modify any value outside of it's scope

### 01.09 Concatenating Arrays

- Use `arr.concat`: older approach
- Use `[...arr1, ...arr2]`: spread operator
- Don't use push it will mutate the array

### 01.10 Check if User With Such Name Exists

- `arr.some()`: return boolean - best solution
- `!!arr.find()` or `Boolean(arr.find())`
- `arr.findIndex()`

### 01.11 Remove All Duplicates in the Array

- `Set`:
  - `[...new Set(arr)]`: returns unique array
  - Set: The Set object lets you store unique values of any type, whether primitive values or object references.
  - Single liner and performant
- `.includes()` and `foreach`
- Don't use breadcrumb
  - not sorted
  - string
- can use `reduce`
- Note: all these are not deep check and only shallow compares the elements. Works only for primitive values

### 01.12 Sorting the Array

- `arr.sort`
  - it mutates the Original array
- Note: For comparing strings: use less than operator since can not subtract strings
  - `return lastNameA < lastNameB ? 1 : -1`

### 01.13 Range

- available in most helper libraries ex: lodash or lamda
- `(start, end) => [...Array(end - start + 1).keys()].map(i => i + start)`: best solution

### 01.14 Shuffle

- ```
    const shuffle = (arr) => arr
        .map((i) => ({ sort: Math.random(), value: i }))
        .sort((a, b) => a.sort - b.sort)
        .map(i => i.value);
  ```

### 01.16 Find the Number of Occurences of Minimum Value in List

- `occurOfMinValue = (items) => items.filter(i => i === Math.min(...items)).length`

### 01.17 this keyword
- inside fn this refers to the global obj (window / undefined etc), if it is not nested: then this will be window
- object: 
    - method in obj: this always refers to the object
    - fn in method of obj: this refers to window
- class instance:
   - method in class: this always refers to the instance of class
    - fn in method of class: this is undefined
- Solution: 
    - use `const _this = this;`
    - or use: arrow fn: for arrow fn, this is always parent scope
