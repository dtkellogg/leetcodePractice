matrix = [[1,2,3],[4,5,6],[7,8,9]] // Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotate = function(matrix){
  matrix = matrix.reverse()
  for(let i in matrix)
    for(let j =0; j<i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  return matrix
}

// PRACTICE

const rotate = (matrix) => {
  matrix = matrix.reverse()
  for(let i in matrix) {
    for(let j = 0; j < i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  }
  return matrix
}

console.log(rotate(matrix))