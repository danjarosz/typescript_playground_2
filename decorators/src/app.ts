function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating peson object...");
  }
}

const pers = new Person();
console.log(pers);
