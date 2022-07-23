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

// same as above w/o comments
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

//   console.log(grid)
  
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


////////////////////////////////////////////////////////////////

// BFS solution:

const WATER = '0';
const LAND = '1';
const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function bfs(grid, r, c ) {
    let queue = [[r, c]];
    grid[r][c] = WATER;
    
    while (queue.length) {
      console.log(`queue:`)
      console.log(queue)

        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [row, col] = queue.shift();
            
            for (let [x, y] of DIRECTIONS) {
                let iRow = row + x;
                let iCol = col + y;
                
                if (iRow < 0 || iRow >= grid.length || iCol < 0 || iCol >= grid[0].length || grid[iRow][iCol] !== LAND) {
                    continue;
                }
                
                grid[iRow][iCol] = WATER;
                queue.push([iRow, iCol]);
            }
        }
    }
}

function numIslands(grid) {
    if (!grid.length) {
        return 0;
    }
    
    let numberOfIslands = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {

          console.log('--------------------------------')
          console.log('starting grid:')
          console.log(grid)
          console.log(`r,c: ${r}, ${c}`)
          console.log(`count: ${numberOfIslands}`)
          console.log('--------------------------------')


            if (grid[r][c] === LAND) {
                numberOfIslands++;
                bfs(grid, r, c);
            }
        }
    }
    return numberOfIslands;
}



////////////////////////////////
// PRACTICE

// const numIslands = (grid) => {
//   const H = grid.length
//   const W = grid[0].length
//   let count = 0

//   for(let r = 0; r < H; r++) {
//     for(let c = 0; c < W; c++) {
//       if(grid[r][c] === '0') continue
//       count++;
//       dfs(r,c)
//     }
//   }

//   return count

//   function dfs(r, c) {
//     if(r < 0 || c < 0 || r === H || c === W) return
//     if(grid[r][c] === '0') return

//     grid[r][c] = '0';
//     dfs(r+1,c)
//     dfs(r-1,c)
//     dfs(r,c+1)
//     dfs(r,c-1)
//   }
// }














console.log(numIslands(grid));