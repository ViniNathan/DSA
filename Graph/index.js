// Graph is a non-linear data structure that models relationships between objects.
// It consists of two main components: Vertices (nodes) & Edges
// Adjacency list: shows to us how the Vertices are connected by Edges:
//
//    E-----------A--------B
//    |                    |
//    |                    |
//    |                    |
//    |                    |
//    D--------------------C
//
// {
//   A:["B","E"],
//   B:["A", "C"].
//   C:["B","D"],
//   D:["C","E"],
//   E:["A","D"]
// }

class Graph {
    constructor() {
        this.adjacencyList = {}
    };

    addVertex(vtx) {
        if (!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = [];
            return true;
        };
        return false;
    };

    addEdge(vtx1, vtx2) {
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
            return true;
        };

        return false;
    };

    removeEdge(vtx1, vtx2) {
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
                (v) => v != vtx2
            );
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
                (v) => v != vtx1
            );
            return true;
        };

        return false;
    };

    removeVertex(vtx) {
        if (!this.adjacencyList[vtx]) return undefined;

        for (let neighbor of this.adjacencyList[vtx]) {
            this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
                v => v != vtx
            );
        }

        delete this.adjacencyList[vtx]
        return this;
    };
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.removeEdge("A", "B");
graph.removeVertex("C")
console.log(graph);