class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(node) {
            const newNode = this.makeNode(node);
            if (!this.root) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }
        //search(root,15);
    search(node, data) {
        if (node === null)
            return null;

        else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else
            return node;
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.value == null) {
                console.log("duplicated");
                return;
            } else if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.value == null) {
                return;
            } else if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
        return tree;
    }

    makeNode(node) {
        return {
            value: node,
            left: null,
            right: null
        }
    }
    BFS() {
        var current = this.root;
        var list = [];
        var queue = [];
        queue.push(current);
        while (queue.length > 0) {
            current = queue.shift();
            list.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return list;
    }
    BFSR(queue, list) {
        if (!queue.length) {
            return list;
        }
        var current = queue.shift();
        list.push(current.value);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
        return this.BFSR(queue, list);
    }
    DFSInorder() {
        return traverseInOrder(this.root, []);
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, []);
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, []);
    }
}
/**
 *                        9
 *                  4         20
 *               1    6    15    70
 * 
 */
function traverseInOrder(node, list) {
    debugger;
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

var tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(70);
/**
 *    9
 * 4    20
 * 
 * 
 */

//console.log(tree.BFS())
//console.log(tree.BFSR([tree.root], []));
console.log(tree.DFSInorder());
//console.log(tree.DFSPreOrder());
//console.log(tree.DFSPostOrder());
//FROM TEACHER