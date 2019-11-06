//Написати функцију која израчунава цену пице
//по квадратном центиметру (уносе се цена и полупречник)

function pizzaPrice(price, r) {
    const PI = Math.PI;
    let pizzaSurface = r * r * PI;
    pizzaPricePerCm2 = price / pizzaSurface;
    pizzaPricePerCm2 = pizzaPricePerCm2;
    return pizzaPricePerCm2;
}

console.log('Pizza price per cm2 is ' + pizzaPrice(100, 32));