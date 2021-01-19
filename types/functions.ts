function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void
function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

const res = add(3, 5);
printResult(res);

//undefined type
function printResultUn(num: number): undefined {
  console.log(`Result: ${num}`);
  return;
}

// types of functions
let combineValues: (x: number, y: number) => number;
combineValues = add;
// combineValues = printResult; // it fails
console.log(combineValues(8, 9));

// functions and callbacks
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
