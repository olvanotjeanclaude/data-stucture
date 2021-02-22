//enq(google) google-->udemy-->facebook
//enq(udemy) udemy-->facebook
//enq(facebook)

class Queue {
    constructor() {
        this.first = null;
        this.first = null;
        this.length = 0;
    }
    makeNode(node) {
        return {
            node: node,
            next: null
        }
    }

    peek() {
        return this.first;
    }

    enqueue(node) {
        const newNode = this.makeNode(node);
        if (!this.last) {
            this.first = this.last = newNode;
        } else {
            var oldNode = this.last;
            oldNode.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first == this.last) {
            this.first = this.last = null;
            return null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }

    empty() {
        return this.length > 0;
    }
}

//queue implementation using stack
class OtherQueue {
    constructor() {
        this.array = [];
    }

    equeue(node) {
        this.array.push(node);
        return this;
    }


    dequeue() {
        var top;
        var length = this.array.length;

        for (var i = 0; i < length - 1; i++) {
            var temp = this.array[i];
            this.array[i] = this.array[i + 1];
            this.array[i + 1] = temp;
            top = this.array[i + 1];
        }

        this.array.pop();

        return this;
    }


    makeNode(node) {
        return {
            node: node,
            next: null
        }
    }
}
var myOtherQueue = new OtherQueue();
myOtherQueue.equeue(10);
myOtherQueue.equeue(11);
myOtherQueue.equeue(12);
myOtherQueue.equeue(13);
myOtherQueue.dequeue();
myOtherQueue.dequeue();
myOtherQueue.dequeue();

//console.log(myOtherQueue);
//console.log(myOtherQueue);
/*var myQueue = new Queue();
myQueue.enqueue("joy");
myQueue.enqueue("math");
myQueue.enqueue("pavel");
myQueue.enqueue("samir")
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue()
myQueue.dequeue();
console.log(myQueue);*/