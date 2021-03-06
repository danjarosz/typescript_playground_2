type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//intersection type - definition 1
type ElevatedEmployee = Admin & Employee;

// //intersection type - definition 2
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Daniel",
  privileges: ["create server"],
  startDate: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;

// Type guards

function add(a: Combine, b: Combine) {
  //type guard 1
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  // type guard 2
  if ("privileges" in emp) {
    console.log("Privilages: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: ", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCargo(cargo: number) {
    console.log(`Loading cargo (${cargo})...`);
  }
}

type Vehicule = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicule(vehicule: Vehicule) {
  vehicule.drive();

  // type guard 3 - but Truck must be an object
  if (vehicule instanceof Truck) {
    vehicule.loadCargo(1000);
  }
}

useVehicule(v1);
useVehicule(v2);

// Discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = null;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with the speed: ", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 300 });
moveAnimal({ type: "horse", runningSpeed: 40 });

// Type casting
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input") as HTMLInputElement;
userInput.value = "some text";

// Index properties - more flexible objects
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start width a character' }
  id: string;
  [prop: string]: string; // index type -  don't known number of properties, but each od properties should be a string
}

const errorBag: ErrorContainer = {
  id: "123",
  email: "Not a valid email",
};

// FUNCTION OVERLOADS
function newAdd(a: number, b: number): number;
function newAdd(a: string, b: string): string;
function newAdd(a: number, b: string): string;
function newAdd(a: string, b: number): string;
function newAdd(a: Combine, b: Combine) {
  //type guard 1
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const resultNum = newAdd(1, 5);
const resultStr = newAdd("Dan", "Jar");
const resultMix = newAdd(5, "Jar");

// OPTIONAL CHAINING - useful for data fiven from backend
const fetchedUserData = {
  id: "u1",
  name: "Dan",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedUserData?.job?.title);

//NULLISH COALESCING
const newUserInput = null;
const storedData = newUserInput ?? "Default"; // fallback, operator given by TypeScript. It doesn't use truthy and falsy values
console.log(storedData);
