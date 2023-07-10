// Problem Statement:
// You are given a graph represented as an adjacency list in JavaScript. Write 
// a function that performs a Depth-First Search (DFS) traversal on the graph
// starting from a given vertex. The function should return an array
// representing the order in which the vertices were visited during the 
// traversal.

// --- Graph Example:

// const graph = {
//   'A': ['B', 'C'],
//   'B': ['D', 'E'],
//   'C': ['F'],
//   'D': [],
//   'E': ['F'],
//   'F': []
// };

// --- Function Signature:

// function dfs(graph, startVertex) {
//   Your implementation
// }

// --- Example Usage:

const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};

const result = dfs(graph, 'A');
console.log(result); // ['A', 'B', 'D', 'E', 'F', 'C']

// --- Detailed Answer:

function dfs(graph, startVertex) {
  const visited = new Set();
  const traversalOrder = [];

  // Define a helper function for the recursive DFS
  function dfsHelper(vertex) {
    visited.add(vertex); // Mark the vertex as visited
    traversalOrder.push(vertex); // Add the vertex to the traversal order array

    // Explore the adjacent vertices
    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        dfsHelper(neighbor); // Recursively call DFS on the neighbor
      }
    }
  }

  dfsHelper(startVertex); // Start the DFS traversal from the start vertex

  return traversalOrder;
}


// Explanation:
// The function dfs takes two parameters: graph, which represents the adjacency 
// list graph, and startVertex, which is the vertex from where the DFS traversal 
// should begin.

// The function initializes a visited set to keep track of visited vertices and 
// a traversalOrder array to store the order in which vertices are visited.

// Inside the function, a helper function dfsHelper is defined to perform the 
// recursive DFS. The dfsHelper function takes a vertex as an argument.

// First, the current vertex is marked as visited by adding it to the visited 
// set. Then, the vertex is added to the traversalOrder array.

// Next, the function iterates over the adjacent vertices of the current vertex. 
// For each adjacent vertex, if it has not been visited yet (i.e., not present 
// in the visited set), the dfsHelper function is called recursively on that 
// neighbor.

// Finally, the dfsHelper function is called initially with the startVertex to 
// begin the DFS traversal.

// The function returns the traversalOrder array, which represents the order in 
// which vertices were visited during the DFS traversal.

// In the example usage provided, the dfs function is called on the graph with 
// the startVertex 'A'. The expected output is ['A', 'B', 'D', 'E', 'F', 'C'], 
// indicating the order in which vertices were visited during the DFS traversal 
// starting from 'A'.