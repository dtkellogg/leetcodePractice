numRows = 5

var generate = function(numRows) {
    let rows = []
    
    for(let i=0; i<numRows; i++) {
        rows[i] = []
        rows[i][0] = 1
        
        for(let j=1; j<i; j++){
            rows[i][j] = rows[i-1][j-1] + rows[i-1][j]
        }
        
        rows[i][i] = 1
    }
    
    return rows
};

console.log(generate(numRows))