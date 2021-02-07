class Department {
  constructor(name: string) {
    this.name = name;
  }

  name: string; // it is public by default
  private employees: string[] = [];

  describe = () => {
    console.log(`Department: ${this.name}`);
  };

  addEmployee = (empolyee: string) => {
    this.employees.push(empolyee);
  };

  printEmployeeInformation = () => {
    console.log(this.employees.length);
    console.log(this.employees);
  };
}

const accounting = new Department("Accounting");
// console.log(accounting);
accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployee("Jon Snow");
accounting.addEmployee("Janusz");
// accounting.employees[2] = "nanna"; // illegal due to private
accounting.printEmployeeInformation();
