//inputs: 2 arrays -size no limit
/*
array1[1,2,3,9] // output: false
array2[1,2,4,4] // output: true
*/

//Brute force method:
function coupleOfSum1(array1, target) {

    let arraySize = array1.length;
    let result = [];
    for (let i = 0; i < arraySize; i++) {
        for (let j = 0; j < arraySize; j++) {
            if (array1[i] + array1[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }

    return false;
}
/*
array1[1,2,3,9] // output: false
array2[4,2,6,7] // output: true
*/
function pairAtTwoArray(array1, array2) {
    let map = {},
        result = [];

    let size1 = array1.length;
    let size2 = array2.length;

    for (let i = 0; i < size1; i++) {
        if (!map[array1[i]]) {
            let item = array1[i];
            map[item] = true;
            result.push(i)

        }
    }

    for (let j = 0; j < size2; j++) {
        if (map[array2[j]]) {
            return true;
        }
    }

    return false;
}
let result = pairAtTwoArray(["4", "a", "c", "d"], ["s", "b", "www", "h", "d"]);
console.log(result);