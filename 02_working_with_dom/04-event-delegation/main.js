// Implement a click on todo item as fast as possible
// const $elements = document.querySelectorAll(".todo-app li.item");

// // Spread node list to iterable array
// [...$elements].forEach(i => {
//     i.addEventListener("click", (event) => {
//         event.target.style = "text-decoration: line-through";
//     })
// });

// The above approach will create multiple event listeners for each item

// Better solution: To create only one event listener for the parent item

const $element = document.querySelector(".todo-app");

$element.addEventListener("click", (e) => {
    if(e.target && e.target.classList.contains("item")) {
        console.log(e.target.classList)
        e.target.style = "text-decoration: line-through";
    }
})
