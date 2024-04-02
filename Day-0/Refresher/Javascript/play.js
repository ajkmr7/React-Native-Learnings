const person = {
  name: "Vijay",
  age: 22,
  hasHobbies: false,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const personName = ({ name }) => console.log(name);
const { name, hasHobbies } = person;

const copiedPerson = { ...person };

const summarizeUser = (name, age, hasHobbies) => {
  return "Name: " + name + "\n Age: " + age + "\n Hobbies: " + hasHobbies;
};

const add = (a, b) => a + b;

const hobbies = ["Sports", "Music", "Singing"];
hobbies.push("Coding");
const mappedHobbies = hobbies.map((hobby) => "Hobby: " + hobby);
const updatedHobbies = [...hobbies];

const toArray = (...args) => args;

console.log(summarizeUser("Ajay", 32, true));
console.log(add("65", "Ajay"));
person.greet();
console.log(hobbies);
console.log(mappedHobbies);
console.log(toArray(1, 2, 3, 4, 5));
personName(person);
console.log(name + " " + hasHobbies);
