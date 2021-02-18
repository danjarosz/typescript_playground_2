// INTRODUCTION
// example generic types: Array, Promise, Function
// Array
const names: Array<string> = []; // string[]
// names[0].split(" ");

//Promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

//Function
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeResult = merge({ name: "dan", surname: "jar" }, { age: 30 });
console.log(mergeResult);
const mergeResult2 = merge({ brand: "Seat" }, { model: "Ibiza", age: 5 });
console.log(mergeResult2);
// const mergeResult3 = merge({ brand: "Seat" }, 4);
// console.log(mergeResult3);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got ${element.length} element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["h1", "h2"]));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Dan" }, "name"));
