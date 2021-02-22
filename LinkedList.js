class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(node) {
        var newNode = this.makeNode(node);
        if (!this.tail) {
            this.head = this.tail = newNode;
            this.currentNode = newNode;
            this.size++;
        } else {
            var oldNode = this.currentNode;
            oldNode.next = newNode;
            this.tail = newNode;
            this.currentNode = newNode;
            this.size++;
        }
    }
    prepend(node) {
        var newNode = this.makeNode(node);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    getSize() {
        return this.size;
    }
    getNode(node) {
        var current = this.head;
        while (current) {
            if (current.node == node) {
                return current;
            }
            current = current.next;
        }
        return -1;
    }

    removeNode(node) {
        var a = this.getNode(node);
        if (a != -1) {

        }
    }

    makeNode(node) {
        return {
            node: node,
            next: null
        }
    }
}

var a = new LinkedList();
a.append("append");
a.append("sssssssssss");
a.append("22")
a.prepend("prepa")
a.append("222s")
a.append("222sss")
a.prepend("prepens")
var x = a.getNode(22);

//console.log(a);