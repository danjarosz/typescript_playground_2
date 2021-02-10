class Department {
  // defining properties v1
  // constructor(name: string) {
  //   this.name = name;
  // }

  // name: string; // it is public by default
  // private employees: string[] = [];

  // defining properties v2 (shorten)
  constructor(private readonly id: string, public name: string) {}
  protected employees: string[] = []; // available from classes that extend Department (privaye blocks it), not from outside

  describe = () => {
    console.log(`Department (${this.id}): ${this.name}`);
  };

  addEmployee = (empolyee: string) => {
    this.employees.push(empolyee);
  };

  printEmployeeInformation = () => {
    console.log(this.employees.length);
    console.log(this.employees);
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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  public addEmployee = (name: string) => {
    if (name.length) {
      this.employees.push(name);
    }
  };

  public addReport = (text: string) => {
    this.reports.push(text);
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
accounting.printReports();

const itDep = new ITDepartment("d2", ["admin1", "admin2"]);
itDep.describe();
itDep.addEmployee("Mietak");
itDep.addEmployee("Robert");
itDep.printEmployeeInformation();
itDep.printAdmins();
