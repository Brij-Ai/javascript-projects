'use strict';
// Started function again

//Default perameter in function
// const bookings = [];
// const createBooking = function (
//   flightNum = 'Air india',
//   numPassenger = 1,
//   price = 1000,
// ) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('BH001', 9, 3);
// createBooking('BH001', undefined, 3); // default value
// createBooking('BH002'); // default value
// createBooking(); // all default value

//pass by value and refrence

// const flight = 'LHBG76';
// const user = {
//   name: 'Jexa hummern',
//   passport: 8948384,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'BN876';
//   passenger.name = 'Mr' + passenger.name;
//   if (passenger.passport === user.passport) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passpost');
//   }
// };

// checkIn(flight, user);
// checkIn(user);
// checkIn(flight);

//Starting high order function and first class function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
// console.log(oneWord('hello you not ready for this !'));

const toUpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};

// High order function
const transform = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transform('What is the going on !', toUpperFirstWord);
transform('What is the going on !', oneWord);

// function
const highFive = function () {
  console.log('👋👋');
};

document.body.addEventListener('click', highFive);

['Sunny', 'Nirmal'].forEach(highFive);
