//google push(google) google-->youtube-->messenger
//push(youtube) youtube-->messenger
// push(messenger) messenger->null 
class Stack {
    constructor(val) {
        this.top = val ? this.makeNode(val) : null;
        this.bottom = this.top;
        this.length = (this.top != null) ? 1 : 0;
    }

    makeNode(node) {
        return {
            node: node,
            next: null
        };
    }

    peek() {
        return this.top;
    }

    push(node) {
        const newNode = this.makeNode(node);
        if (!this.top) {
            this.top = this.bottom = newNode;
        } else {
            var prevNode = this.top;
            this.top = newNode;
            newNode.next = prevNode;
        }
        this.length++;
        return this;
    }
    isEmpty() {
        return this.length == 0;
    }
    pop() {
        if (this.length < 0) {
            return null;
        }
        if (this.top == this.bottom) return null;
        var top = this.top;
        this.top = top.next;

        this.length--;

        return this;
    }
}
var stack1 = new Stack(10);
stack1.push(11);
stack1.push(12);
stack1.push(13);
stack1.push("olvanot");
stack1.push("first");
stack1.pop();
stack1.pop();
stack1.push("ok")
    //console.log(stack1)