interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

const person: Person = {
  name: "Daniel",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivites: any[];
favoriteActivites = ["Sports", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.name, person.age);
