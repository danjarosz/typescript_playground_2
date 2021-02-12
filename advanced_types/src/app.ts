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
