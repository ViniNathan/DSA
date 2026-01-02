// Graph is a non-linear data structure that models relationships between objects.
// It consists of two main components: Vertices (nodes) & Edges
// Adjency list: shows to us how the Vertices are connected by Edges:
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