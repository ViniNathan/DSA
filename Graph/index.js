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
        }
        return false;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B")
graph.addVertex("C")
console.log(graph);