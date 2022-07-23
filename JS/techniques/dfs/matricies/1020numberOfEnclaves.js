grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]  // Output: 3


// BELOW IS WRONG... IT'S MY ATTEMPT... CAN'T FIGURE IT OUT
// function numIslands(grid) {
//   const H = grid.length;
//   const W = H && grid[0].length;
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === 0) continue;
//       dfs(r, c);
//     }
//   }

//   console.log(grid)
  
//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     // if (grid[r][c] === 0) return;
    
//     if(
//     (dfs(r-1, c) === 0 || dfs(r-1,c) === undefined) &&
//     (dfs(r+1, c) === 0 || dfs(r+1,c) === undefined) &&
//     (dfs(r, c-1) === 0 || dfs(r,c-1) === undefined) &&
//     (dfs(r, c+1) === 0 || dfs(r,c+1) === undefined)
//     )
//     count++
//   }
// }

console.log(numIslands(grid))