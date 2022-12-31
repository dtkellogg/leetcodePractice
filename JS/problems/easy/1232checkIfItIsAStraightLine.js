coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// shoelace formula
// var checkStraightLine = function(coords) {
//     const n = coords.length;
    
//     for (let i = 0; i < n - 2; i++) {
//         const area = Math.abs(1/2 * (
//             (coords[i][0] * coords[i + 1][1] + coords[i + 1][0] * coords[i + 2][1] + coords[i + 2][0] * coords[i][1]) -
//             (coords[i][1] * coords[i + 1][0] + coords[i + 1][1] * coords[i + 2][0] + coords[i + 2][1] * coords[i][0])
//         ));
        
//         if (area > 0) return false;
//     }
    
//     return true;
// };

var checkStraightLine = function(coordinates) {
    
    let xDiff = coordinates[1][0] - coordinates[0][0];
    let yDiff = coordinates[1][1] - coordinates[0][1];
    
    for(let i = 2; i < coordinates.length; i++) {
        let currXDiff = coordinates[i][0] - coordinates[i-1][0];
        let currYDiff = coordinates[i][1] - coordinates[i-1][1];
        
        if(xDiff*currYDiff != yDiff*currXDiff) return false;  // cross product from slope proportion
    }
    return true;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(checkStraightLine(coordinates))