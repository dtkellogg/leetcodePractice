// You have been tasked with implementing a graph data structure in JavaScript. 
// The graph should support the following operations:

// addNode(node) - Adds a new node to the graph.
// addEdge(node1, node2) - Adds an undirected edge between two nodes in the graph.
// removeNode(node) - Removes a node and all its associated edges from the graph.
// removeEdge(node1, node2) - Removes the edge between two nodes in the graph.
// getNeighbors(node) - Returns an array of neighbors for a given node.
// isConnected(node1, node2) - Returns true if there is a path between two nodes, false otherwise.

// Implement the Graph class in JavaScript to fulfill the requirements above.

// --- Detailed Answer:

class Graph {
  constructor() {
    this.nodes = new Map(); // Using a Map to store nodes and their neighbors
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, new Set()); // Using a Set to store neighbors of each node
    }
  }

  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const neighbors1 = this.nodes.get(node1);
      const neighbors2 = this.nodes.get(node2);
      neighbors1.add(node2);
      neighbors2.add(node1);
    }
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      const neighbors = this.nodes.get(node);
      neighbors.forEach((neighbor) => {
        const neighborSet = this.nodes.get(neighbor);
        neighborSet.delete(node);
      });
      this.nodes.delete(node);
    }
  }

  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const neighbors1 = this.nodes.get(node1);
      const neighbors2 = this.nodes.get(node2);
      neighbors1.delete(node2);
      neighbors2.delete(node1);
    }
  }

  getNeighbors(node) {
    if (this.nodes.has(node)) {
      return Array.from(this.nodes.get(node));
    }
    return [];
  }

  isConnected(node1, node2) {
    if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
      return false;
    }

    const visited = new Set();
    const stack = [node1];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      visited.add(currentNode);

      if (currentNode === node2) {
        return true;
      }

      const neighbors = this.nodes.get(currentNode);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }

    return false;
  }
}

// --- Explanation:

// The code above implements the Graph class with all the required operations. 
// It uses a Map to store nodes as keys and their corresponding neighbors in a 
// Set. Adding nodes and edges is done by adding entries to the map and adding 
// neighbors to the sets. Removing nodes and edges is done by removing entries 
// from the map and removing neighbors from the sets.

// The getNeighbors method returns an array of neighbors for a given node by 
// converting the set to an array. The isConnected method checks if there is a 
// path between two nodes using a depth-first search (DFS) algorithm. It 
// maintains a set of visited nodes and a stack to track the traversal. If it 
// finds the target node during the traversal, it returns true, otherwise false.

// This graph implementation allows you to create and manipulate graphs, find 
// neighbors of a node, and determine if there is a path between two nodes.