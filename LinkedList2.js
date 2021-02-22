class List {
    constructor(data) {
        this.head = {
            node: data || null,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }
    makeNode(node) {
        return {
            node: node,
            next: null
        }
    }

    append(node) {
        var newNode = this.makeNode(node);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return this;
    }

    prepend(node) {
        var newNode = this.makeNode(node);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;

        return this;
    }

    removeTail() {
        var prev;
        var count = 0;
        var current = this.head;
        while (current) {
            if (count == this.size - 2) {
                prev = current;
            }
            current = current.next;
            count++;
        }
        prev.next = null;
        this.tail = prev;
        this.size--;
    }

    removeHead() {
        var removeHead = this.head;
        var nextNode = this.head.next;
        this.head = nextNode;
        removeHead.next = null;
        this.size--;
    }

    getTail() {
        return this.tail;
    }

    getHead() {
        return this.head;
    }

    search(node) {
        var current = this.head;
        while (current) {
            if (current.node == node) {
                return current;
            }
            current = current.next;
        }

        return -1;
    }

    printList() {
        const list = [];
        var current = this.head;
        while (current.next != null) {
            list.push(current.node);
            current = current.next;
        }
        list.push(this.tail.node)
        return list;
    }

    remove(index) {
            if (index <= 0) {
                return this.removeHead();
            }

            if (index >= this.size) {
                return this.removeTail();
            }

            var leader = this.travereseToIndex(index - 1);
            var unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.size--;

            return this;
        }
        //22-->23-->24-->25-->null
    insert(index, node) {
        if (index >= this.size) {
            return this.append(node);
        } else if (index <= 0) {
            return this.prepend(node);
        } else {
            var current = this.head;
            var newNode = this.makeNode(node);
            var prev;
            var next;
            var count = 0;

            while (count <= index) {
                next = current.next;
                if (count == index - 1) {
                    prev = current;
                    newNode.next = next;
                    prev.next = newNode;
                    this.size++;
                    return this;
                }

                current = current.next;
                count++;
            }
            return this.printList();
        }

    }
    travereseToIndex(index) {
        var current = this.head;
        var count = 0;
        while (count != index) {
            current = current.next;
            count++;
        }
        return current;
    }
}

var list = new List(10);
list.append(12);
list.append(18);
list.append(19);
list.append(20);
list.append(21);
list.append(22)

//list.prepend("prepend 20");
var test = list.insert(3, "inserted");
//console.log(list.printList())
list.remove(6)
    //console.log(list.printList())