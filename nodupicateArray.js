var noduplicateArray = (arrays) => {
    var map = new Map();
    var length = arrays.length;

    if (arrays) {
        for (var i = 0; i < length; i++) {
            if (!map.has(arrays[i])) {
                map.set(arrays[i], 1);
            } else {
                map.set(arrays[i], map.get(arrays[i]) + 1);
            }
        }

        for (var i = 0; i < arrays.length; i++) {
            if (map.get(arrays[i]) == 1) {
                return arrays[i];
            }
        }
    }


    return undefined;
}