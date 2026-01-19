// 'use strict';

function greet() {
  //function scope
  let gr = 'hello';
  return gr;
}
// console.log(gr); // checking gr variable is accessible or not, not accessible
// Block scope
if (true) {
  let a = 9;
  console.log('hello world !');
}
// console.log(a); not accessible here
