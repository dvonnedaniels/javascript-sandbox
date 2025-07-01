// Stack and Heap
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Brad',
  age: 40
}

let newName = name;

console.log(name, newName);
newName = 'Johnathan';

let newPerson = person;

console.log(name, newName);
console.log(person, newPerson);