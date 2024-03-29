grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    var perimeter = 0;
    
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (!grid[row][col]) continue;
            
            perimeter += 4;
            
            // abstract the number of adjacent island
            if (row > 0 && grid[row - 1][col]) perimeter--;  // row === 0 means you are in the top row
            if (col > 0 && grid[row][col - 1]) perimeter--;
            if (row < rows - 1 && grid[row + 1][col]) perimeter--;  // row === rows - 1 means last row
            if (col < cols - 1 && grid[row][col + 1]) perimeter--;
        }
    }
    
    return perimeter;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(islandPerimeter(grid))