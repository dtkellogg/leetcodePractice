grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]  // Output: 3



// Practice
function numEnclaves(grid) {
    let H = grid.length,
        W = grid[0].length,
        count = 0

    const dfs = (r,c) => {
        if(r < 0 || c < 0 || r >= H || c >= W || !grid[r][c]) return;
        grid[r][c] = 0
        

        
        dfs(r+1,c)
        dfs(r,c+1)
        dfs(r-1,c)
        dfs(r,c-1)
    }

    for(let i = 0; i < H; i++) {
        if(grid[i][0] === 1) dfs(i,0)
        if(grid[i][W-1] === 1) dfs(i,W-1)
    }

    for(let j = 0; j < W; j++) {
        if(grid[0][j] === 1) dfs(0,j)
        if(grid[H-1][j] === 1) dfs(H-1,j)
    }



    for(let r = 0; r < H; r++) {
        for(let c = 0; c < W; c++) {
            if(grid[r][c] === 1) count++
        }
    }


    return count
}

console.log(numEnclaves(grid))