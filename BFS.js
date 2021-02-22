class BST {
    constructor() {
        this.root = null;
    }
    insert(node) {
        var newNode = this.makeNode(node);
        if (!this.root) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if (node < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    search(value) {
        var current = this.root;
        if (!current) return false;
        while (current) {
            if (value < current.value) {

                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else if (current.value == value) {
                return current;
            }
        }

        return false;
    }
    makeNode(value) {
        return {
            value: value,
            left: null,
            right: null
        }
    }
}

const bst = new BST();
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(20)
bst.insert(170)
bst.insert(15)
bst.insert(1)
    //console.log(bst);
    //console.log(bst.search(230))