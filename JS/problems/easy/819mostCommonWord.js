paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]


// var mostCommonWord = function(paragraph, banned) {
//     const words = paragraph.toLowerCase().split(/[ !?',;.]/);
//     const map = new Map();
//     const set = new Set(banned);
//     words.forEach(word => map.set(word, map.has(word) ? map.get(word) + 1 : 1));
//     set.forEach(banned => {
//         if(map.has(banned)) map.delete(banned);
//     });
    
//     let res = '', max = Number.MIN_SAFE_INTEGER;
//     for(let [word, count] of map.entries()) {
//         if(word) {
//             res = count > max ? word : res;
//             max = count > max ? count : max;
//         }
//     }
//     return res;
// };
////////////////////////////////////////////////////////////////

// better answer
const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = {};
  let answer = {count: 0, word: ''}
  
  console.log(words)
  
  for (const w of words) {
    if (!bannedSet.has(w)) {
        console.log(typeof map[w])
      if (map[w] == null) map[w] = 0;  // === doesn't work here (triple equals)... could also do undefined === undefined
      map[w]++;
        
      if(map[w] > answer.count) {
          answer.count = map[w]
          answer.word = w
      }
    }
  }
  
  console.log(map)

  return answer.word;
};

console.log(mostCommonWord(paragraph, banned))