abstract class Department {
  static fiscalYear = 2020;
  // defining properties v1
  // constructor(name: string) {
  //   this.name = name;
  // }

  // name: string; // it is public by default
  // private employees: string[] = [];

  // defining properties v2 (shorten)
  constructor(protected readonly id: string, public name: string) {}
  protected employees: string[] = []; // available from classes that extend Department (privaye blocks it), not from outside

  // abstract describe(this: Department): void;
  abstract describe = (): void => {};

  addEmployee = (empolyee: string) => {
    this.employees.push(empolyee);
  };

  printEmployeeInformation = () => {
    console.log(this.employees.length);
    console.log(this.employees);
  };

  static createEmployee = (name: string) => {
    return { name };
  };
}

class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  public admins: string[];

  public printAdmins = () => {
    console.log(this.admins.length);
    console.log(this.admins);
  };

  describe = () => {
    console.log(`Department (${this.id}): ${this.name}`);
  };
}

const employee = Department.createEmployee("Marian");
console.log(employee);
console.log(Department.fiscalYear);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Wrong value passed!");
    }
    this.addReport(value);
  }

  describe = () => {
    console.log(`The name of this Department (${this.id}) is ${this.name}`);
  };

  public addEmployee = (name: string) => {
    if (name.length) {
      this.employees.push(name);
    }
  };

  public addReport = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };

  public printReports = () => {
    console.log("Reports: ", this.reports);
  };
}

const accounting = new AccountingDepartment("d1", []);
// console.log(accounting);
accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployee("Jon Snow");
accounting.addEmployee("Janusz");
// accounting.employees[2] = "nanna"; // illegal due to private
accounting.printEmployeeInformation();
accounting.addReport("report 1");
accounting.addReport("Very interesting report");
accounting.mostRecentReport = "Harry Potter"; //setter
console.log(accounting.mostRecentReport); //getter
accounting.printReports();

const itDep = new ITDepartment("d2", ["admin1", "admin2"]);
itDep.describe();
itDep.addEmployee("Mietak");
itDep.addEmployee("Robert");
itDep.printEmployeeInformation();
itDep.printAdmins();
