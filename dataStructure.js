const memo = ["memo"];
let array = ["OLVANOT", "JAQUINOT"];
const { performance } = require('perf_hooks');

function findName(name) {
    let t1 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] == name) {
            console.log("found " + name);
        }
    }
    let t2 = performance.now();
    let time = t2 - t1;
    console.log(name + "found in " + time + " seconde ");
}

findName("JAQUINOT");