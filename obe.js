const { performance } = require('perf_hooks');

var printPerformance = function() {
    console.log(performance.now());
}

var ppcm = function(number) {
    var result = [];

    for (var i = 0; i < number; i++) {
        if (number % i == 0) {
            result.push(i);
            number = number / i;
        }
    }
    return result;
}

//Brute force
var obeyBruteForce = function(array1, array2) {
    var last = 0;

    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                last = array1[i];
            }
        }
    }
    //console.log(array1, array2);
    return last;
}

//with map
var obey = function(array1, array2) {
    var myMap = new Map();
    var last = 0;

    for (var i = 0; i < array1.length; i++) {
        myMap.set(array1[i], array1[i]);
    }

    for (var i = 0; i < array2.length; i++) {
        if (myMap.has(array2[i])) {
            last = myMap.get(array2[i]);
        }
    }
    return last;
}

var a = 6,
    b = 24;



console.log("start with obey: ");
printPerformance();
var max2 = obey(ppcm(a), ppcm(b));
console.log("end with obey: ");
printPerformance();
console.log(max2);


console.log("start a with obey: ");
printPerformance();
var max2 = obey(ppcm(a), ppcm(b));
console.log("end a with obey: ");
printPerformance();
console.log(max2);