

grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

// DFS solution: 
// function numIslands(grid) {
//   const H = grid.length;
//   const W = H && grid[0].length;
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === '0') continue;

//       console.log('--------------------------------')
//       console.log('starting grid:')
//       console.log(grid)
//       console.log(`r,c: ${r}, ${c}`)
//       console.log('--------------------------------')
      
//       count++;
//       console.log(`count: ${count}`)
//       dfs(r, c);
//     }
//   }

//   console.log(grid)
  
//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     if (grid[r][c] === '0') return;

//     console.log(grid)
    
//     grid[r][c] = '0';
//     dfs(r-1, c);
//     dfs(r+1, c);
//     dfs(r, c-1);
//     dfs(r, c+1);
//   }
// }



////////////////////////////////////////////////////////////////
// 🔥🔥🔥 same as above w/o comments

// function numIslands(grid) {
//   const H = grid.length;
//   const W = H && grid[0].length;
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === '0') continue;
//       count++;
//       dfs(r, c);
//     }
//   }

//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     if (grid[r][c] === '0') return;
    
//     grid[r][c] = '0';
//     dfs(r-1, c);
//     dfs(r+1, c);
//     dfs(r, c-1);
//     dfs(r, c+1);
//   }
// }














////////////////////////////////
// PRACTICE

const numIslands = (grid) => {
  let h = grid.length,
      l = grid[0].length,
      count = 0

  const dfs = (r,c) => {
    if(grid[r][c] === '0') return;
    grid[r][c] = '0';
    count += 1;

      console.log(`r,c: ${r}, ${c}`)


    dfs(grid[r-1][c])
    dfs(grid[r+1][c])
    dfs(grid[r][c-1])
    dfs(grid[r][c+1])
  }

  for(let r = 0; r < h; r++) {
    for(let c = 0; c < l; c++) {
      dfs(r, c)
    }
  }
  return count
}








console.log(numIslands(grid)); 