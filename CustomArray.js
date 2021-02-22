export default class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return (index < this.length) ? this.data[index] : -1;
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    pop() {
        if (this.length > 0) {
            delete this.data[this.length - 1];
            this.length--;
            return true;
        }
        return false;

    }
    delete(item) {
        let shift = this.shiftItems(item);
        if (shift) {
            delete this.data[this.length - 1];
            this.length--;
            return true;
        }
        return false;
    }
    shiftItems(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] == item) {
                this.data[i] = this.data[i + 1];
                return true;
            }
        }
        return false;
    }
    refresh() {
        this.length = 0;
        this.data = {};
    }
    reverse() {
        let lastIndex = this.length - 1;
        let temp;
        for (let i = 0; i < this.length; i++) {
            temp = this.data[i];
            this.data[i] = this.data[lastIndex];
            this.data[lastIndex] = temp;
        }
        return this.data;
    }
}