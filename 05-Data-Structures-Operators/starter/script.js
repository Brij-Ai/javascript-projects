'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIdx, mainIdx) {
    return [this.starterMenu[startIdx], this.mainMenu[mainIdx]];
  },

  orderDelivery: function (obj) {
    console.log(
      `Order recieved !,place at ${obj.location},cost is ${obj.cost},you ordered ${this.starterMenu[obj.foodeIdx]}`,
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '08:22',
  location: 'NIT Agartal',
  foodeIdx: 2,
  cost: 432,
});
// 01. Destructring Array

// const arr = [3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];
// destructring assighnment
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// destructring categories array
// const [first, second] = restaurant.categories;
// let [first, , third] = restaurant.categories;
// console.log(first, third);
// switching variables
// 1 by swapping
// 2 by another (shortcut)
// [third, first] = [first, third];
// console.log(first, third);

// let [starterOrder, mainOrder] = restaurant.order(3, 0);
// console.log(starterOrder, mainOrder);
// Nested destructring
// const nestedArr = [1, 2, [3, 4]];
// const [i, , [j, k]] = nestedArr;
// console.log(i, j, k);

// Default values
// const arr1 = [4, 3];
// const [P = 1, q = 1, r = 1] = arr;
// console.log(P, q, r);

// 2.Destructring Object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // default values
// const { menu = [], starterMenu: MenuS = [] } = restaurant;
// console.log(menu, MenuS);

//Destructring nested object

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// The Spread Operator
const num = [5, 6, 7];
const newNum = [1, 2, 3, 4, num[0], num[1], num[2]];
//spreading num array
const newNum2 = [1, 2, 3, 4, ...num];
console.log(newNum);
console.log(newNum2);
console.log(...newNum2);

const name = 'Brij';
// const newName = [...name, 'k'];

console.log(newName);
