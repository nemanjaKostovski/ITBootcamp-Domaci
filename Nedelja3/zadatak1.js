//Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)

// function maxNumber(a, b, c) {
//     maxNum = Math.max(a, b, c);
//     return maxNum;
// }
// console.log(maxNumber(10, 2, 3));

function maxNumber(a, b, c){
    if((a > b) && (a > c)) return a;
   else if(b > c) return b;
   else return c;
}
console.log(maxNumber(10, 2, 3));