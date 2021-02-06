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
const add = (a: number, b: number = 0): number => a + b;

console.log(add(4, 7));

type printOutputType = (a: string | number) => void;

const printOutput: printOutputType = (print) => console.log(print);

printOutput(add(4, 3));
printOutput(add(4));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
