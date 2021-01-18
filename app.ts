interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
}

const person: Person = {
  name: "Daniel",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivites: any[];
favoriteActivites = ["Sports", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

person.role[0] = 1;

console.log(person.name, person.age);
