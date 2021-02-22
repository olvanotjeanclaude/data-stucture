class Graph {
    constructor() {
        this.adjacenList = {};
        this.nodesNumber = 0;
    }
    addVertex(node) {
        this.adjacenList[node] = [];
        this.nodesNumber++;
        return this;
    }
    addEdge(node1, node2) {

        if (this.adjacenList[node1] && this.adjacenList[node2]) {
            this.adjacenList[node1].push(node2);
            this.adjacenList[node2].push(node1);
            return this;
        } else {
            return false;
        }
    }
}

var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addEdge('0', '2');
myGraph.addEdge('2', '1');
myGraph.addEdge('2', '3');
myGraph.addEdge('1', '3');


console.log(myGraph);