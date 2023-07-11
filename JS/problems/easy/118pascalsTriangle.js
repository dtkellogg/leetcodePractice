numRows = 5

var generate = function(numRows) {
  var pascal = [];
  for (var i = 0; i < numRows; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
    }
    pascal[i][i] = 1;
  }
  return pascal;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var generate = function(numRows) {
  let res = [];

  for(let i = 0; i < numRows; i++) {
    res[i] = [];
    res[i][0] = 1
    for(let j = 1; j < i; j++) {
      res[i][j] = res[i-1][j-1] + res[i-1][j]
    }
    res[i][i] = 1
  }
  return res
}

console.log(generate(numRows))