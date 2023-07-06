// grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// solution: 1
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
// solution: 3



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

//   console.log(grid)
//   return count;
// }



////////////////////////////////////////////////////////////////
// 🔥🔥🔥 same as above w/o comments

// function numIslands(grid) {
//   const H = grid.length;
//   const W = grid[0].length;
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
  let res = 0, H = grid.length, W = grid[0].length

  for(let i = 0; i < H; i++) {
    for(let j = 0; j < W; j++) {
      if(grid[i][j] === '0') continue;
      res++;
      dfs(i,j)
    }
  }

  return res;

  function dfs (x,y) {
    if(x < 0 || y < 0 || x === H || y === W) return
    if(grid[x][y] === '0') return
    grid[x][y] = '0'
    dfs(x - 1,y)
    dfs(x + 1,y)
    dfs(x,y - 1)
    dfs(x,y + 1)
  }
}



console.log(numIslands(grid)); 