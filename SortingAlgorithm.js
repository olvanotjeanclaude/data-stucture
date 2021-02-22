class Sort {
    constructor(array) {
        this.array = array;
    }

    mergeSort(array) {
        var length = array.length;
        var middle = Math.floor(length / 2);
        var leftArray = array.slice(0, middle);
        var rightArray = array.slice(middle);

        if (array.length == 1) {
            return array;
        }
        return this.merge(
            this.mergeSort(leftArray),
            this.mergeSort(rightArray)
        );
    }

    merge(leftArray, rightArray) {
        var output = [];
        var leftIndex = 0;
        var rightIndex = 0;

        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            var leftElement = leftArray[leftIndex];
            var rightElement = rightArray[rightIndex];

            if (leftElement < rightElement) {
                output.push(leftElement);
                leftIndex++;
            } else {
                output.push(rightElement);
                rightIndex++;
            }
        }

        return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
    }

    selection() {
        var array = this.array;
        if (!array) {
            return false;
        }

        var length = array.length;
        for (var i = 0; i < length - 1; i++) {
            var low = i;
            for (var j = i + 1; j < length; j++) {
                if (array[j] < array[low]) {
                    low = j;
                }
                //swap
            }
            var temp = array[i];
            array[i] = array[low];
            array[low] = temp;
        }

        return array;
    }

    quickSort(array) {
        if (array.length <= 1) {
            return array;
        }
        var leftArray = [];
        var rightArray = [];
        var length = array.length;
        var pivot = array[length - 1];

        for (var i = 0; i < length - 1; i++) {
            if (array[i] < pivot) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }
        return [...this.quickSort(leftArray), ...this.quickSort(rightArray), pivot];
    }
}

var array = [3, 1, 9, 2, 7, 34, 23];

var sort = new Sort(array);
var a = sort.selection();
var b = sort.mergeSort(array);
var c = sort.quickSort(array);
console.log(a);
console.log(b);
console.log(c)