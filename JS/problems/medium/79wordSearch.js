board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "BCCED"
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"  // Output: true


// Time O(mn * 4^l), l = word.length
// Space O(mn + l)
const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const go = (x, y, k) => {

    console.log(`x: ${x}, y: ${y}, k: ${k}, board[x][y] = ${board[x][y]}`);

    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = '*'; // mark as visited

    console.log(board)

    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;

      console.log(`dx: ${dx}, dy: ${dy}, i: ${i}, j: ${j}`)

      if (i >= 0 && i < h && j >= 0 && j < w) {
        console.log("---------------------------------------")
        console.log(`go(i, j, k + 1): ${go(i, j, k + 1)}`)
        if (go(i, j, k + 1)) return true;
      }


    }
    board[x][y] = word[k]; // reset    
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {

      console.log("------------------------------------------------------------------------------")
        
      if (go(i, j, 0)) return true;
    }
  }

  return false;
};


// 🔥🔥
//////////////////////////////// 
// same algorithm as above, but w/o comments && A LITTLE TWEEKED - RETURN STATEMENTS W/O FALSE
// const exist = (board, word) => {
const exist = (board, word) => {
  if(board.length === 0) return false

  const h = board.length,
        w = board[0].length,
        directions = [[-1,0], [0, 1], [1,0], [0,-1]]

  for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
      if(go(i, j, 0)) return true
    }
  }

  function go(x, y, k) {
    if(board[x][y] !== word[k]) return
    if(k === word.length - 1) return true
    board[x][y] = '*'

    for(let [dx, dy] of directions) {
      const i = x + dx,
            j = y + dy

      if(i >= 0 && i < h && j >= 0 && j < w) {
        if(go(i,j,k + 1)) return true
      }
    }
    board[x][y] = word[k]
    return
  }

  return false
};


// PRACTICE

// const exist = (board, word) => {
// }

console.log(exist(board, word))