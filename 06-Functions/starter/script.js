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

const flight = 'LHBG76';
const user = {
  name: 'Jexa hummern',
  passport: 8948384,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'BN876';
  passenger.name = 'Mr' + passenger.name;
  if (passenger.passport === user.passport) {
    alert('Checked in');
  } else {
    alert('Wrong passpost');
  }
};

checkIn(flight, user);
checkIn(user);
checkIn(flight);
