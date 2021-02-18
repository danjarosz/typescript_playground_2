// INTRODUCTION
// example generic types: Array, Promise, Function, Class
//--------------------------------------------------
// Array
const names: Array<string> = []; // string[]
// names[0].split(" ");

//--------------------------------------------------
// Promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

//--------------------------------------------------
// Function
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

//--------------------------------------------------
// Class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const index = this.data.indexOf(item);
    if (index === -1) {
      return;
    }
    this.data.splice(index, 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

textStorage.addItem("hello");
console.log(textStorage.getItems());
textStorage.addItem("Something new");
textStorage.removeItem("hello");
console.log(textStorage.getItems());

numberStorage.addItem(10);
console.log(numberStorage.getItems());
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Dan" });
// console.log(objStorage.getItems());
// objStorage.addItem({ name: "Ran" });
// objStorage.removeItem({ name: "Dan" });
// console.log(objStorage.getItems());

//--------------------------------------------
// Generic utility types

//Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

// Readonly
const someNames: Readonly<string[]> = ["Max", "Anna"];
// someNames.push("Manu"); // cannot be modified
// can be used with objects too
