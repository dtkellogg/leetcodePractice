grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]  // Output: 6

// DFS solution (depth-first search)
// const maxAreaOfIsland = (grid) => {
//     const res = { count: 0 }
//     for (let r = 0; r < grid.length; r++) {
//         for (let c = 0; c < grid[0].length; c++) {

//             console.log("-----------------------------------")

//             dfs(grid, r, c, res)
//         }
//     }
//     return res.count
// };

// const dfs = (grid, r, c, res, area = { count: 0 }) => {

//     console.log(`r: ${r}, c: ${c}, res.count: ${res.count}, area.count: ${area.count}`)

//     if (!grid[r] || !grid[r][c]) return
//     res.count = Math.max(res.count, area.count += grid[r][c])
//     grid[r][c] = 0 // so don't count twice
//     dfs(grid, r, c - 1, res, area)
//     dfs(grid, r, c + 1, res, area)
//     dfs(grid, r - 1, c, res, area)
//     dfs(grid, r + 1, c, res, area)
// };


////////////////////////////////////////////////////////////////
// 🔥🔥🔥 same algorithm as above, but w/o comments
// const maxAreaOfIsland = (grid) => {
//     const res = { count: 0 }
//     for (let r = 0; r < grid.length; r++) {
//         for (let c = 0; c < grid[0].length; c++) {
//             dfs(grid, r, c, res)
//         }
//     }
//     return res.count
// };

// const dfs = (grid, r, c, res, area = { count: 0 }) => {
//     if (!grid[r] || !grid[r][c]) return
//     res.count = Math.max(res.count, area.count += grid[r][c])
//     grid[r][c] = 0
//     dfs(grid, r, c - 1, res, area)
//     dfs(grid, r, c + 1, res, area)
//     dfs(grid, r - 1, c, res, area)
//     dfs(grid, r + 1, c, res, area)
// };

// PRACTICE

const maxAreaOfIsland = (grid) => {
    let res = {count: 0}
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            dfs(r, c, res)
        }
    }

    return res.count


    function dfs (r, c, res, area = {count: 0}) {
        console.log(`count: ${res.count}`)
        if(!grid[r] || !grid[r][c]) return
        res.count = Math.max(res.count, area.count += grid[r][c])
        grid[r][c] = 0
        dfs(r+1, c, res, area)
        dfs(r, c+1, res, area)
        dfs(r-1, c, res, area)
        dfs(r, c-1, res, area)
    }

}

console.log(maxAreaOfIsland(grid))