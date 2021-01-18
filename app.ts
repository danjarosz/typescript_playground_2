function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(num1, num2, false, "");
console.log(result);
add(num1, num2, printResult, resultPhrase);
