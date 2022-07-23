grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

var islandPerimeter = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    
    let perimeter = 0
    
    for(let row=0; row<rows; row++) {
        for(let col=0; col<cols; col++) {
            if(!grid[row][col]) continue;
            
            perimeter += 4
            
            if(row > 0 && grid[row-1][col]) perimeter--
            if(col > 0 && grid[row][col-1]) perimeter--
            if(row < rows && grid[row+1][col] === 1) perimeter--
            if(col < cols && grid[row][col+1] === 1) perimeter--
        }
    }
    
    return perimeter
};

console.log(islandPerimeter(grid))