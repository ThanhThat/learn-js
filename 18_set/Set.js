// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// declare set
// const mySet1 = new Set();

// or declare Set any data type
const myArr = [
  0,
  1,
  2,
  function () {
    console.log("that");
  },
];
const mySet2 = new Set(myArr);

// method add
// mySet1.add(5);
// mySet1.add(5);
// mySet1.add(function () {
//   console.log("that");
// });

// Removes all elements form the Set object.
// mySet1.clear(); // Do not use it, because it is very dangerous

// Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return fasle afterwards.
// mySet1.delete(5);

// get size <=> array.length
// const sizeMySet1 = mySet1.size;

// console.log(mySet1);
// console.log("Size mySet1: ", sizeMySet1);
// console.log(mySet2);

// using foreach to iterate over the elements of set
// mySet2.forEach((item) => console.log(item));

// delete element has value is function
// mySet2.forEach((value) => {
//   if (typeof value === "function") {
//     mySet2.delete(value);
//   }
// });

// clone set to arr
// The first way
// const myArr1 = [...mySet2];
// console.log("array 1: ", myArr1);
// The second way
// const myArr2 = Array.from(mySet2);
// console.log(myArr2);

// Set.prototype.entries()
// const valueEntriesMySet2 = mySet2.entries();
// console.log(valueEntriesMySet2);
// for (let item of valueEntriesMySet2) {
//   console.log(item[0], item[1]);
// }

// has() => Return a boolean asserting whether an element is present with the given value in the Set object or not.
console.log(mySet2.has("function"));
