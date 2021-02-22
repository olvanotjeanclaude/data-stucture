const { count } = require("console");

class HashTable {
    constructor(size) {
        this.data = new Array(size);
        this.size = size;
    }

    _hash(string) {
        var hash = 17;
        if (string) {
            for (let i = 0; i < string.length; i++) {
                hash = (hash + string.charCodeAt(i)) % this.size;
            }

            return hash;
        }
    }
    set(key, value) {
        var address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        var address = this._hash(key);
        var currentBox = this.data[address];

        if (currentBox) {
            for (var i = 0; i < currentBox.length; i++) {
                // console.log(currentBox[i])
                if (currentBox[i][0] === key) {
                    return currentBox[i][1];
                }
            }
        }

        return undefined;
    }
    keys() {
        var keys = [];
        // console.log(this.data)
        if (this.data.length) {
            for (var j = 0; j < this.data.length; j++) {
                if (this.data[j]) {
                    keys.push(this.data[j][0][0]);
                }
            }
            return keys;
        }
        return undefined;
    }
}

var hash1 = new HashTable(13);
hash1.set("name", "olvanot");
hash1.set("surname", "Rakotonirina");
hash1.set("age", 23);
hash1.set("test", "je m'appelle olvanot");
hash1.set("index2", "val 2");
hash1.set("index3", "val 3");
hash1.set("index4", "val 4");
hash1.set("index5", "val 5");

hash1.get("test")