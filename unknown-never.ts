// unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Name";
userInput = userName;
console.log(userInput);

// never - useful to intend the fn()  to not return anything
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

const res = generateError("An error ocured", 500);
console.log(res);
