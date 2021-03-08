// import Person from './person.js'

// const ahmad = new Person('Osman', 'Ahmad', 35, true);

// console.log(ahmad.fullName());

import Employee from './employee.js';
import Person from './person.js';
const ahmad = new Employee('Osman', 'Ahmad', 35, true, 'DCI', 'teaching');

console.log(ahmad.fullName());
console.log(ahmad.status());

const abdullah = new Person('Haidar', 'Abdullah', 37, false);
console.log(abdullah.fullName());

// private fields  ref
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

// object getter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

// object setter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

// static field 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

// singleton
// https://www.dofactory.com/javascript/design-patterns/singleton