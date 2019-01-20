const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from the other side.');


const Person = {
  name: 'Tugberk',
  age: 21,
  greet() {
    console.log("Hi, it's " + this.name)
  },
  greet1: function() {
    console.log("Hi, it's " + this.name)
  },
  greet2: () => {
    console.log("Hi, it's " + this.name)
  }
}

const printName = ({name}) => {
  console.log(name);
};


Person.greet();

Person.greet1();

Person.greet2();

const hobbies = ['scuba', 'football'];

for(let hobby of hobbies) {
  console.log(hobby);
}

const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = {...Person};
console.log(copiedPerson);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1,2,3,4));

printName(Person);

const {name, age} = Person;
console.log(name, age);