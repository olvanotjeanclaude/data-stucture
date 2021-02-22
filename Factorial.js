//5! =5*4*3*2*1
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function factorialIterate(n) {
    var total = 1,
        count = 1;
    while (count <= n) {
        total *= count;
        count++;
    }
    return total;
}

var fact = factorial(5);
var fact2 = factorialIterate(5)
console.log(fact)
console.log(fact2);