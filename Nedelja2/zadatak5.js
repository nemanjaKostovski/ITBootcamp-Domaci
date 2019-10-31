let pizzaRadius = 32;
let pizzaPrice = 10;
let pizzaHalfRadius = pizzaRadius / 2;
const PI = Math.PI;

let pizzaSurface = pizzaHalfRadius * pizzaHalfRadius * PI;
let pizzaPricePerCm2 = pizzaPrice / pizzaSurface;
pizzaPricePerCm2 = pizzaPricePerCm2.toFixed(2);

console.log(`Price of the pizza per cm2 is ${pizzaPricePerCm2} $ `);