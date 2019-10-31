let n = 100;

for (let i = 1; i <= n; i++) {
    let a = '';

    if( i % 3 == 0) { a += 'Fizz';}
    if( i % 5 == 0) { a += 'Buzz';}
    if( i % 7 == 0) { a += 'Zazz';}
    if(a == '') {a = i;};

    console.log(a);
}