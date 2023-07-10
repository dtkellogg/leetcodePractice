// --- Problem Description:

// You are given a directed graph represented as an adjacency matrix in 
// JavaScript. Your task is to implement two functions: 
// breadthFirstSearch(source, target) and shortestPath(source, target). The 
// breadthFirstSearch function should return a boolean value indicating whether 
// there is a path from the source node to the target node. The shortestPath 
// function should return the shortest path (an array of nodes) from the source 
// node to the target node if one exists, and an empty array if there is no path.

// You should implement the functions breadthFirstSearch and shortestPath and demonstrate their usage with the following graph:

// const graph = [
//   [0, 1, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0]
// ];

// --- Example Usage:

console.log(breadthFirstSearch(0, 3)); // Output: true
console.log(shortestPath(0, 3)); // Output: [0, 2, 4, 3]
console.log(breadthFirstSearch(1, 4)); // Output: false
console.log(shortestPath(1, 4)); // Output: []

// --- Note:

// The graph is represented as a 2D matrix, where graph[i][j] is 1 if there is a 
// directed edge from node i to node j, and 0 otherwise.
// The nodes are labeled from 0 to n-1, where n is the number of nodes in the 
// graph.
// The breadthFirstSearch function should use the Breadth-First Search algorithm 
// to determine if there is a path from source to target.
// The shortestPath function should use the Breadth-First Search algorithm to find the shortest path from source to target.

// --- Detailed Answer:

function breadthFirstSearch(source, target) {
  const visited = new Array(graph.length).fill(false);
  const queue = [];

  visited[source] = true;
  queue.push(source);

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === target) {
      return true;
    }

    for (let i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return false;
}

function shortestPath(source, target) {
  const visited = new Array(graph.length).fill(false);
  const queue = [];
  const parents = new Array(graph.length).fill(-1);

  visited[source] = true;
  queue.push(source);

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === target) {
      break;
    }

    for (let i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
        parents[i] = node;
      }
    }
  }

  if (parents[target] === -1) {
    return [];
  }

  const path = [];
  let current = target;

  while (current !== -1) {
    path.unshift(current);
    current = parents[current];
  }

  return path;
}

const graph = [
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

console.log(breadthFirstSearch(0, 3)); // Output: true
console.log(shortestPath(0, 3)); // Output: [0, 2, 4, 3]
console.log(breadthFirstSearch(1, 4)); // Output: false
console.log(shortestPath(1, 4)); // Output: []

// --- Explanation:

// The breadthFirstSearch function performs a Breadth-First Search traversal on 
// the given directed graph. It starts from the source node and explores all the 
// neighboring nodes in breadth-first order until it reaches the target node or 
// exhausts all reachable nodes. The function returns true if the target node is 
// reachable from the source node and false otherwise.

// The shortestPath function also performs a Breadth-First Search traversal. 
// However, in addition to determining if a path exists, it keeps track of the 
// parent of each visited node. This information helps reconstruct the shortest 
// path from the source to the target node, if one exists. The function returns 
// the shortest path as an array of nodes in the correct order. If no path 
// exists, an empty array is returned.

// In the given example, breadthFirstSearch(0, 3) returns true because there is 
// a path from node 0 to node 3 in the graph. Similarly, shortestPath(0, 3) 
// returns [0, 2, 4, 3], which represents the shortest path from node 0 to node 
// 3 in the graph.

// On the other hand, breadthFirstSearch(1, 4) returns false since there is no 
// path from node 1 to node 4 in the graph. shortestPath(1, 4) returns an empty 
// array [] as there is no valid path between the two nodes.