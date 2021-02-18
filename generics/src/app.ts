// INTRODUCTION
// example generic types: Array, Promise, Function
// Array
const names: Array<string> = []; // string[]
// names[0].split(" ");

//Promise
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

// promise.then((data) => {
//   // data.split(" ");
// });

//Function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeResult = merge({ name: "dan", surname: "jar" }, { age: 30 });
console.log(mergeResult);
const mergeResult2 = merge({ brand: "Seat" }, { model: "Ibiza", age: 5 });
console.log(mergeResult2);
