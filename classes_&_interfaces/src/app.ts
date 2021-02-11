interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "Daniel",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello");

//--------------------------
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  age?: number;
  greet(phrase: string): void;
}

class PersonCL implements Greetable {
  name: string;
  age: number;

  constructor(n: string, age: number = 30) {
    this.name = n;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: Greetable;
user2 = {
  name: "Daniel",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello");

let user3 = new PersonCL("Janko");
user3.greet("Cześć,");
console.log(user3);

let user4 = new PersonCL("Ziemowit", 22);
user4.greet("Cześć,");
console.log(user4);

//-------------------------------
// Function Interface
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
