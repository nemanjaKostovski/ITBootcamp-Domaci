let numbers = [1, 2, 3, 4, 5, 10, 15, 23, 1, 5];
// //Brzo resenje
// let divisiveBy5 = numbers.filter((number) => {
//     return number % 5 === 0;
// });

// console.log(divisiveBy5);

                        
const dividableByFive = (subjectArr) => { 
    const dividable = [];

    for (let i = 0; i < subjectArr.length; i++) 
        subjectArr[i] % 
        5 === 0 && 
        (dividable[dividable.length] = subjectArr[i]);

    return dividable;
}

console.dir(dividableByFive(numbers));
