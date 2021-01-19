enum RoleVal {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
  roleEnum: RoleVal; //enum
  someInfo: any;
  arrayOfSomething: any[];
}

const person: Person = {
  name: "Daniel",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  roleEnum: RoleVal.ADMIN,
  someInfo: "something",
  arrayOfSomething: ["string", 190, {}, []],
};

let favoriteActivites: any[];
favoriteActivites = ["Sports", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

person.role[0] = 1;

if (person.roleEnum === RoleVal.ADMIN) {
  console.log("Is admin");
}

console.log(person.name, person.age);
