'use strict';

// function greet() {
//   //function scope
//   let gr = 'hello';
//   return gr;
// }
// console.log(gr); // checking gr variable is accessible or not, not accessible
// Block scope
// if (true) {
//   let a = 9;
//   console.log('hello world !');
// }
// console.log(a); not accessible here
// Global Function
// function calAge(birthYear) {
//   console.log(firstName); // firstName = vinace consoled
// Name is not deifined
//   console.log(name); // Not as any variable declared
//   const age = 2025 - birthYear;

//   function displayAge() {
//     console.log(`${firstName} age is ${age} and born in ${birthYear}`);
//     let output = 'OLD O/P';
// if (birthYear >= 1981 && birthYear <= 1996) {
//   var millenial = true;
//   let str = `Oh, You are a millenial , ${firstName}`;
//   console.log(str);
//   // Reassighning
//   output = 'NEW O/P';
//   // Function are also block scoped
//   function add(a, b) {
//     return a + b;
//   }
// }
// console.log(str);
// console.log(millenial); // undefined
// add(3, 4); blocked scoped
//     console.log(output);
//   }
//   displayAge();
//   return age;
// }
// const firstName = 'Vinace';
// calAge(2004);

// Hoisting Practice
// Variable Hoisting
// console.log(mySelf); // undefined
// console.log(year);
// console.log(job);

// var mySelf = 'Brij';
// TDZ
// let job = 'Unemployed';
// const year = '2026';

// Function Hoisting
// console.log(addDec(8, 4));
// console.log(addExr(8, 4));
// console.log(addArrow(8, 4));

// function addDec(a, b) {
//   return a + b;
// }
// TDZ
// const addExr = function (a, b) {
//   return a + b;
// };
// TDZ
// const addArrow = (a, b) => a + b;

// Example
// console.log(cartItem); // undefined
// if (!cartItem) deleteCarItem(); // true bcz cartItme = undefined
// var cartItem = 10;
// function deleteCarItem() {
//   console.log('Cart is deleted!');
// }

// let const and var
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// starting This keyword practice
console.log(this);
function calAge(birthYear) {
  const age = 2026 - birthYear;
  console.log(this);
}
calAge(2001);

const br = {
  birthYear: 2008,
  calAge: function () {
    console.log(2026 - this.birthYear);
  },
};

br.calAge();

const sonu = {
  birthYear: 2004,
};

sonu.calAge = br.calAge;
sonu.calAge();
