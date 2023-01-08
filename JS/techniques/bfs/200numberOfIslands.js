grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
// grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]


// 🔥🔥 BFS solution:

// const WATER = '0';
// const LAND = '1';
// const DIRECTIONS = [
//   [0, 1],
//   [1, 0],
//   [0, -1],
//   [-1, 0],
// ];

// function bfs(grid, r, c ) {
//   let queue = [[r, c]];
//   grid[r][c] = WATER;
  
//   while (queue.length) {
//     console.log(`queue:`)
//     console.log(queue)

//     let size = queue.length;
//     for (let i = 0; i < size; i++) {
//       let [row, col] = queue.shift();
      
//       for (let [x, y] of DIRECTIONS) {
//         let iRow = row + x;
//         let iCol = col + y;
        
//         if (iRow < 0 || iRow >= grid.length || iCol < 0 || iCol >= grid[0].length || grid[iRow][iCol] !== LAND) {
//           continue;
//         }
        
//         grid[iRow][iCol] = WATER;
//         queue.push([iRow, iCol]);

//         console.log(grid)
//       }
//     }
//   }
// }

// function numIslands(grid) {
//   if (!grid.length) {
//     return 0;
//   }
  
//   let numberOfIslands = 0;
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {

//       console.log('--------------------------------')
//       console.log('starting grid:')
//       console.log(grid)
//       console.log(`r,c: ${r}, ${c}`)
//       console.log(`count: ${numberOfIslands}`)
//       console.log('--------------------------------')


//       if (grid[r][c] === LAND) {
//         numberOfIslands++;
//         bfs(grid, r, c);
//       }
//     }
//   }
//   return numberOfIslands;
// }



// SAME THING AS ABOVE, BUT W/O COMMENTS

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
// }





console.log(numIslands(grid));