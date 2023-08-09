n = 5, edges = [[0,1],[1,2],[3,4]]  // Output: 2


var countComponents = function(n, edges) {
  // create visited array
  let visited = [];
  // create graph
  let graph = buildGraph(n, edges);
  
  console.log("graph")
  console.log(graph)
  
  // create res
  let res = 0;
  
  // mark visited with false
  for (let i = 0; i < n; i ++) {
    visited.push(false);
  }
  
  // traverse graph
  for (let i = 0; i < n; i ++) {
    // not visited
    if (visited[i] === false) {
      res ++;
      dfs(i, graph, visited);
    }
  }
  return res;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length: n}, () => []);
  
  for (let edge of edges) {
    let [src, dist] = edge;
    graph[src].push(dist);
    graph[dist].push(src);
  }
  return graph
}

const dfs = (index, graph, visited) => {
  visited[index] = true;
  let nodes = graph[index];
  for (let i = 0; i < nodes.length; i ++) {
    if (visited[nodes[i]] === false) {
      dfs(nodes[i], graph, visited)
    }
  }
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//// NEW ALGORITHM: union-find alg

// With union-find algorithm, we can identify the islands by 2 steps:

// Step 1. Perform the union and find, connect the nodes by given edges
// Step 2. Count the -1 in the union find array

// const countComponents = (n, edges) => {
//   const nums = Array(n).fill(-1);

//   // Step 1. union find
//   for (let i = 0; i < edges.length; i++) {
//     const x = find(nums, edges[i][0]);
//     const y = find(nums, edges[i][1]);

//     // union
//     if (x !== y) nums[x] = y;
//   }

//   // Step 2. count the -1
//   return nums.filter(num => num === -1).length;
// };

// const find = (nums, i) => {
//   if (nums[i] === -1) return i;
//   return find(nums, nums[i]);
// };

console.log(countComponents(n, edges))