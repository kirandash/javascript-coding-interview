// Transform flat list to nested list

const flatList = [
  {
    id: 1,
    name: "lvl 1 item 1",
    parentId: null,
  },
  {
    id: 2,
    name: "lvl 1 item 2",
    parentId: null,
  },
  {
    id: 3,
    name: "lvl 2 item 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "lvl 3 item 4",
    parentId: 3,
  },
  {
    id: 5,
    name: "lvl 2 item 5",
    parentId: 2,
  },
  ,
  {
    id: 6,
    name: "lvl 3 item 6",
    parentId: 3,
  },
];

//[
// {
//    id: 1,
//    children: [
//      {
//        id: 3,
//        children: [
//          {
//            id: 4,
//            children: []
//          }
//        ]
//      }
//    ]
// },
// {
//    id: 2,
//    children: [
//      {
//        id: 5,
//        children: []
//      }
//    ]
// }
//]

// Solution
// 1. Get root elements
// 2. Check children if they have children
// 3. If not -> return item with empty children
// 4. If yes -> go to #2 (Recursion)

// Pure function to recursively add child based on length
const addChild = (item) => {
  const children = flatList.filter((obj) => obj.parentId === item.id);
  let nestedChildren = [];

  // If there are children: start recursion
  if (children.length > 0) {
    nestedChildren = children.map((child) => addChild(child));
  }

  return { ...item, children: nestedChildren };
};

// 1. Get root elements
const nestedList = flatList
  .filter((item) => item.parentId === null)
  .map(addChild);

console.log(nestedList);
