class DoubleLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }
    append(node) {
        var newNode = this.makeNode(node);
        if (!this.tail) {
            this.head = this.tail = newNode;
            this.size++;
            return this;
        }

        var oldNode = this.tail;
        oldNode.next = newNode;
        newNode.prev = oldNode;
        this.tail = newNode;
        this.size++;

        return this;
    }

    prepend(node) {
        var newNode = this.makeNode(node);

        if (!this.head) {
            this.head = this.tail = newNode;
            this.size++;
            return this;
        }

        var oldHead = this.head;
        newNode.next = oldHead;
        oldHead.prev = newNode;
        this.head = newNode;
        this.size++;

        return this;
    }

    insert(node, index) {

        if (index <= 0) {
            return this.prepend(node);
        }

        if (index > this.size) {
            return this.append(node);
        }

        var newNode = this.makeNode(node);
        var prev = this.traverseToIndex(index - 1);
        var next = prev.next;

        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = next;
        this.size++;

        return this;
    }

    makeNode(node) {
        return {
            value: node,
            prev: null,
            next: null
        }
    }

    traverseToIndex(index) {
        var current = this.head;
        var count = 0;

        while (count != index) {
            current = current.next;
        }

        return current;
    }

    search(node) {
            var current = this.head;

            while (current) {
                if (current.value == node) {
                    return current;
                };
                current = current.next;
            }

            return false;
        }
        //0   1   2   3   4   
        //3-->4-->5-->6-->7-->null
    remove(node) {
        var removedNode = this.search(node);

        if (removedNode) {
            if (node == this.head.value) {
                return this.removeHead();
            } else if (node == this.tail.value) {
                return this.removeTail();
            } else if (node == removedNode.value) {
                var left = removedNode.prev;
                var right = removedNode.next;
                left.next = right;
                right.prev = left;
                console.log(removedNode.value + " removed");
                return true;
            }
        }

        return false;
    }

    removeHead() {
        if (this.size == 0) {
            this.head = this.tail = null;
            this.size = 0;
            return this;
        }

        var afterHead = this.head.next;
        afterHead.prev = null;
        this.head = afterHead;
        this.size--;
        console.log("head removed");
        return this;
    }

    removeTail() {
        var prevNode = this.tail.prev;
        prevNode.next = null;
        this.tail = prevNode;
        this.size--;
        console.log("tail removed");
        return this;
    }
}


var myDoubleLS = new DoubleLinkedList();
myDoubleLS.prepend(1);
myDoubleLS.append(2);
myDoubleLS.append(3);
myDoubleLS.append("apend")
myDoubleLS.append(4);
myDoubleLS.append(5);

myDoubleLS.remove("apendd");