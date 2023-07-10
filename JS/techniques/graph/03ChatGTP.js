// You have been tasked with implementing a graph data structure in JavaScript. 
// Your implementation should support the following operations:

// addVertex(vertex): Adds a vertex to the graph.
// addEdge(vertex1, vertex2): Adds an undirected edge between two vertices in the graph.
// removeEdge(vertex1, vertex2): Removes the undirected edge between two vertices in the graph.
// removeVertex(vertex): Removes a vertex and all its associated edges from the graph.
// isConnected(vertex1, vertex2): Returns a boolean indicating whether there is a path between two vertices in the graph.

// --- Implement the Graph class with these operations.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (const neighbor of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, neighbor);
      }
      delete this.adjacencyList[vertex];
    }
  }

  isConnected(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false;
    }

    const visited = new Set();
    const queue = [vertex1];

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      visited.add(currentVertex);

      if (currentVertex === vertex2) {
        return true;
      }

      for (const neighbor of this.adjacencyList[currentVertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return false;
  }
}

// --- Explanation:

// The Graph class is implemented using an adjacency list to represent the 
// connections between vertices. Each vertex is a key in the adjacencyList 
// object, with its associated value being an array of vertices that it is 
// connected to.

// The addVertex method adds a new vertex to the graph by creating a new key in 
// the adjacencyList object.

// The addEdge method adds an undirected edge between two vertices by pushing 
// each vertex into the other's adjacency list.

// The removeEdge method removes the undirected edge between two vertices by 
// filtering out the respective vertices from each other's adjacency list.

// The removeVertex method removes a vertex and all its associated edges from 
// the graph. It iterates through the adjacency list of the vertex, removing the 
// edge between the vertex and its neighbors, and finally deletes the vertex key 
// from the adjacencyList object.

// The isConnected method determines if there is a path between two vertices in 
// the graph. It performs a breadth-first search (BFS) starting from the vertex1 
// and checks if vertex2 is reached during the traversal.

// The implementation handles cases where the provided vertices do not exist in 
// the graph by returning false in the isConnected method and ignoring the 
// operation in other methods.

// Overall, this implementation provides a basic graph data structure in 
// JavaScript with the necessary operations for adding, removing, and checking 
// connectivity between vertices.