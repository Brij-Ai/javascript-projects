// 'use strict';

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
function calAge(birthYear) {
  console.log(firstName); // firstName = vinace consoled
  // Name is not deifined
  //   console.log(name); // Not as any variable declared
  const age = 2025 - birthYear;

  function displayAge() {
    console.log(`${firstName} age is ${age} and born in ${birthYear}`);
    let output = 'OLD O/P';
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      let str = `Oh, You are a millenial , ${firstName}`;
      console.log(str);
      // Reassighning
      output = 'NEW O/P';
      // Function are also block scoped
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    // console.log(millenial); // undefined
    // add(3, 4); blocked scoped
    console.log(output);
  }
  displayAge();
  return age;
}
const firstName = 'Vinace';
calAge(2004);
