//-----------------------------
// let, const and var
const userName = "Daniel";

let age = 30;
age = 29;

// function add(a: number, b: number): number {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld);

//-----------------------------
// Arrow function
// const add = (a: number, b: number = 0): number => a + b;

// console.log(add(4, 7));

// type printOutputType = (a: string | number) => void;

// const printOutput: printOutputType = (print) => console.log(print);

// printOutput(add(4, 3));
// printOutput(add(4));

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

//-----------------------------
// Spread operator

const hobbies = ["sport", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: "Daniel",
  age: 30,
};

const copiedPerson = {
  ...person,
  hobbies,
};

console.log(person);
console.log(copiedPerson);

//-----------------------------
// Rest operator
const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

const addedNumbers = add(1, 2, 3, 4, 5, 10);
console.log(addedNumbers);
