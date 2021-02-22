var robs = function(array, sum) {
    if (array.length == 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    if (left.length == 3) {

    }
}


//              2        2
//[2,7,9]
//[3,1,4]
//[5,6,9]
//[4]
//sum = 2+9
//sum += 3+4
//sum += 5+9
//sum =32 // 0  1  2  3  4||5  6  7  8  9  10
var array = [2, 7, 9, 3, 1, 4, 5, 6, 9, 4, 45];
var a = robs(array);
console.log(a);