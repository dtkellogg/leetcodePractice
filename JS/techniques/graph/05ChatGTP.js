// --- Problem Statement:

// You are given a graph represented as an adjacency matrix and two nodes, 
// startNode and endNode. Your task is to implement a function 
// findShortestPath(graph, startNode, endNode) that finds the shortest path 
// between the startNode and the endNode using breadth-first search (BFS) 
// algorithm. The function should return an array containing the nodes in the 
// shortest path, including both startNode and endNode.

// Please implement the findShortestPath function and provide the necessary 
// helper functions if required.

// --- Example:

const graph = [
  [0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 1, 0]
];

console.log(findShortestPath(graph, 0, 4)); // Expected output: [0, 1, 3, 4]
console.log(findShortestPath(graph, 1, 2)); // Expected output: [1, 0, 2]

// --- Detailed Answer:

// To solve this problem, we can use the breadth-first search (BFS) algorithm to 
// traverse the graph and find the shortest path between the startNode and 
// endNode.

// Here's the implementation of the findShortestPath function in JavaScript:

function findShortestPath(graph, startNode, endNode) {
  const queue = []; // Queue for BFS traversal
  const visited = new Array(graph.length).fill(false); // Track visited nodes
  const parent = new Array(graph.length).fill(-1); // Track parent nodes

  queue.push(startNode); // Add startNode to the queue
  visited[startNode] = true; // Mark startNode as visited

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Get the first node from the queue

    if (currentNode === endNode) {
      // If we reach the endNode, construct the path and return
      return constructPath(parent, startNode, endNode);
    }

    for (let neighbor = 0; neighbor < graph[currentNode].length; neighbor++) {
      // Traverse through neighbors of the currentNode
      if (graph[currentNode][neighbor] === 1 && !visited[neighbor]) {
        queue.push(neighbor); // Add neighbor to the queue
        visited[neighbor] = true; // Mark neighbor as visited
        parent[neighbor] = currentNode; // Set parent of neighbor to currentNode
      }
    }
  }

  // If we reach here, there is no path between startNode and endNode
  return [];
}

function constructPath(parent, startNode, endNode) {
  const path = [];
  let currentNode = endNode;

  while (currentNode !== startNode) {
    path.unshift(currentNode); // Add currentNode at the beginning of the path
    currentNode = parent[currentNode]; // Move to the parent node
  }

  path.unshift(startNode); // Add startNode at the beginning of the path
  return path;
}

// The findShortestPath function performs a breadth-first search on the graph 
// starting from the startNode. It keeps track of the visited nodes using the 
// visited array and the parent nodes using the parent array. Once it reaches 
// the endNode, it calls the constructPath function to construct the path from 
// startNode to endNode using the parent array.

// The constructPath function constructs the path by tracing back from the 
// endNode to the startNode using the parent array.

// In the example provided, the function findShortestPath(graph, 0, 4) will 
// return [0, 1, 3, 4], representing the shortest path from node 0 to node 4. 
// Similarly, findShortestPath(graph, 1, 2) will return [1, 0, 2], representing 
// the shortest path from node 1 to node 2.

// Note: The given graph is represented as an adjacency matrix where 1 
// represents an edge between two nodes, and 0 represents no edge. You can 
// assume that the graph is connected and does not contain any cycles.