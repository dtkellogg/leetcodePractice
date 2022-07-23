s = "PAYPALISHIRING", numRows = 4  // Output: "PINALSIGYAHRPI"

var convert = function(s, numRows) {
  const len = s.length;
  if (numRows < 2 || len < numRows) {
    return s;
  }
  const rows = new Array(numRows).fill('');
  let reverse = false;
  let count = 0;
  for (let i = 0; i < len; i++) {
    rows[count] += s[i];
    reverse? count--: count++;
    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }
  return rows.join('');
};

console.log(convert(s, numRows))






////////////////////////////////////////////////////////////////
// Visualizations to help understand what the goal of this problem is:

// It's easier to look at the problem with visualizations. What we need to do here is to break down the input string in zigzag fashion and recompose row by row.

// convert('ABCDEF', 2) returns 'ACEBDF'
//     Row 1 ->  A   C   E
//     Row 2 ->    B   D   F
// convert('ABCDEF', 3) returns 'AEBDFC'
//     Row 1 ->  A       E
//     Row 2 ->    B   D   F
//     Row 3 ->      C
// convert('ABCDEF', 4) returns 'ABFCED'
//     Row 1 ->  A
//     Row 2 ->    B       F
//     Row 3 ->      C   E
//     Row 4 ->        D