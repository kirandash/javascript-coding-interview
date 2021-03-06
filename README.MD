# JS Coding Interview

- Source: https://monsterlessons-academy.com/courses
- https://www.youtube.com/channel/UCssWuTdNCWN4RSF3wHzzjMw
-

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

### 01.07 Currying [Hard]

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

### 01.18 Class

- class definition
- use constructor for default props
- all other props can be set using set and get methods
- for get, instead of methods, we can use props access with dot method

### 01.19 Prototypes

- `var Employee = function(id, name) {}`
- `Employee.prototype.setSalary`
- Extend main function: `Employee.apply(this, arguments);`
- Clone prototype: `Manager.prototype = Object.create(Employee.prototype);`
- `Manager.prototype.constructor = Manager;`

### 01.21 Modules

- uses import

### 01.22 Common JS [Hard]

- uses require
- **Difference b/w modules and common JS**:
  - modules are ES6 standard and mostly used in browser (import)
  - Common JS are mostly used in node (require)
  - Modules are newer than commonJS
  - common JS is static which means it can be wrapped around if conditions etc
  - While modules can not be put in an if condition

### 01.23 Debounce Fn [Hard]

- Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place before time has elapsed.
- So if a fn is called multiple times, all prev call will be cancelled and only the last one will be executed after delay
- Ex: Calling an API on text change in Input box
- use **Closure**
- `return (...args) => {}`
- `fn.apply(this, args)`
- `const processChange = debounce(saveInput, 3000);`

### 01.24 Throttle Fn [Hard]

- A throttle fn limits the number of `fn()` executions until `time` has elapsed.
- So if a fn is called multiple times, only the first one is execute and all other calls are cancelled

## 02 Working with DOM

### 02.01 Highlight All Words in paragraph Over 8 Chars With Yellow

- `querySelector`, `split`, `map` & `join`
- For multiple paragraphs: use `querySelectorAll` and `[...$paragraph]`

### 02.02 Add link

- `document.createElement("a")`
- `document.body.appendChild(link)`

### 02.03 Split Each Sentence to a Separate Line

- regexp: `split(/\.[^.|<]/)`: all dots but not dot followed by another dot
- Edge case: "Aaah....This is a consular ship." Doesn't work if dot is followed by a char
- website: https://regexr.com/

### 02.04 Event Delegation

- `$element = document.querySelector(".todo-app")`
- `if(e.target && e.target.classList.contains("item")) {}`
- Note: create only one event listener for the parent item ".todo-app" instead of one for each item in list

## 03 Asynchronous JS

### 03.01 XMLHttpRequest

- `const xhr = new XMLHttpRequest()`
- `xhr.open(method, url)`
- `xhr.send()`
- `xhr.onload`
- `xhr.onerror = ()`
- Not used anymore. Used to be the standard 10-15 years ago
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

### 03.02 Fetch API

- returns a promise, so we can use `.then()` method. We can easily combine it with other promises
- by default the method is "GET"
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

### 03.03 Basic Callback

- Create with setTimeout
- Pass cb fn as param and execute it after the async task is done

### 03.04 Parallel async array [Hard]

- store cb values in resultArr
- if resultCount > asyncFuncs.length then call the final callback

### 03.05 Convert CB to Promise [Hard]

- ```
  const promisifyAsyncFn = (asyncFn) => {
    return new Promise((resolve) => {
      asyncFn((data) => {
        resolve(data);
      })
    })
  }
  ```

### 03.06 Map Data in Promises [Hard]

- `Promise.all([]).then([])`
- Use pure functions for mapping users
- Do separate .then() calls - one for getting the result and one for working with the result
- Note: Don't use the naive sol of creating nested promises

### 03.07 Map data with async await

- `const getMappedUsers = async () => { const users = await getUsers(); }`
- Much easier to read compared to promise.all
- put await statements in try catch block to catch error

### 03.08 Design Request Manager [Hard]

- API Request manager
- Note: Add then and catch methods for the recursive fetch manager to bubble the error
- TODO: Add exponential time increase with the recursive fn

## 04 Comparison Functions

- Native, Shallow and Deep

### 04.01 Shallow Comparison [Hard]

- In JS, using native comparision: comparing objs or arrays will return false since they are not compared by value but by instance
- To compare them by value: we can use shallow or deep comparison
- Shallow comparison can check only up to one level. Deep comp is for nested objs or arrays
- Shallow comp is more performant than deep comparison
- Handle shallow comparison for primitive, array, object, date data types
- Create a utility fn `typeOf` with more accurate types
  - Based on each type check length and content match or not

### 04.02 Deep Comparison [Hard]

- Same logic as shallow comparison but with RECURSION for nested array or object

### 04.03 Memoization Function

- Create memo fn with Cache object and closure fn

## 05 Tasks asked only on Interview

### 05.01 Fibonacci [Medium]

- Use RECURSION
  - `return fibonacci(n - 2) + fibonacci(n - 1);`
  - base cases: return 0 for n as 0 and return 1 for n < 2

### 05.02 Palindrome [Easy]

- `const isPalindrome = (str) => str === str.split("").reverse().join("");`

### 05.03 Anagram [Easy]

- sort both strings and compare if equal
- Note: filter out empty spaces

## 06 Tasks from Every day work

### 06.01 Convert to Title Case [Easy]

- `str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")`
- Note: `.slice` is non mutating fn

### 06.02 Convert Time Input to 24h Format [Medium]
- `split` to get hours and minutes
- get modifiers by checking `.includes`
- use `.replace` to remove AM and PM
- `padStart` to add leading zeroes
- `+hours` will convert string to number

### 06.03 Mapping Data [Medium]
- Note: Run map on the primary key ex: `location_key` in this case
- Convert data into FE format

### 06.04 Replace Parameters in URL [Easy]
- Use reduce
- `values.reduce((acc, val) => acc.replace(`:${val.from}`, val.to), url);`

### 06.05 Validation Messages [Medium]
- Mapping BE error codes to FE format
- Use `Object.entries` for converting obj to array format and then can use `.map`

### 06.06 Flat list to Nested List [Hard]
- 1. Get root elements
- 2. Check children if they have children
- 3. If not -> return item with empty children
- 4. If yes -> go to #2 (Recursion)
