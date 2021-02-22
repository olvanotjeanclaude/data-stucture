var mostOccurence = function(elements) {
    var map = new Map();
    var length = elements.length;
    for (var i = 0; i < length; i++) {

        if (map.has(elements[i])) {
            return elements[i];
        }

        map.set(elements[i], i);
    }

    return undefined;
}

var countElements = function(elements) {
    var map = new Map();
    var length = elements.length;
    var result = [];

    for (var j = 0; j < length; j++) {
        if (map.has(elements[j])) {
            map.set(elements[j], map.get(elements[j]) + 1);
        } else {
            map.set(elements[j], 1);
        }
    }

    let max = Math.max(...map.values());
    if (max > 1) {

        for (var i = 0; i < map.size; i++) {

            if (map.get(elements[i]) == max) {
                result[0] = elements[i];
                result[1] = max;
                return result;
            }

        }
    }

    return -1
}

let max = countElements([1, 3, 4, 5]);
console.log(max);