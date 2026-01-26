'use strict';
// Started function again

//Default perameter in function
const bookings = [];
const createBooking = function (
  flightNum = 'Air india',
  numPassenger = 1,
  price = 1000,
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('BH001', 9, 3);
createBooking('BH001', undefined, 3); // default value
createBooking('BH002'); // default value
createBooking(); // all default value
