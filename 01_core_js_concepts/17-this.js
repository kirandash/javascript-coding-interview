// What will be logged here?

// Task 1
// function getItem() {
//   console.log(this); // window object
// }

// getItem();

// Task 2
const item = {
  title: "Ball",
  getItem() {
    console.log("this", this); // item object
    function someFn() {
        console.log("this", this) // window object
    }
    someFn();
    const someFn2 = () => {
        console.log("this", this) 
    }
    someFn2();
  },
};

item.getItem();

// Task 3
// class Item {
//   title = "Ball";
//   getItem() {
//     console.log("this", this); // Item {  }
//     const _this = this;
//     function someFn() {
//       console.log("this", this); // undefined
//       console.log("this", _this)
//     }
//     someFn();
//     const someFn2 = () => {
//         console.log("this", this); 
//     }
//     someFn2();
//   }
// }

// const item2 = new Item();
// item2.getItem();
