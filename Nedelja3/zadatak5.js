// Defining variables
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
const counter = document.querySelector('#counter');
let counterCount = 0;
let currentDate = new Date();
let dateTime = `${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDay()}-${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

//Adding onclick event
left.forEach(buttonL => {
    buttonL.addEventListener('click', function () {
        countering(buttonL);
    });
});
//Adding to counter with each click
function countering(element) {
    console.log(element);
    counterCount++;
    counter.innerHTML = counterCount;
};
//Adding onclick event
right.forEach(buttonR => {
    buttonR.addEventListener('click', function () {
        //Alert if nothing is in order
        if (counterCount === 0) alert('Can\'t order zero items!');
        orderingNow(buttonR);
        resetCounter(buttonR);
    });
// Orders current amount of pizzas in counter
function orderingNow(amount) {
        amount = counterCount;
        //If pizza counter is zero, then the function won't be executed!
        if (counterCount === 0) return
        console.dir(`${dateTime} You just ordered ${amount} of pizzas!`);
    }
});
//Resets counterCount and displays 0
function resetCounter(zero) {
    zero = 0;
    counter.innerHTML = zero;
    counterCount = zero;
};