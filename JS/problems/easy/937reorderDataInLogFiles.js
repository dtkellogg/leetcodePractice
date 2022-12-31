logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

// var reorderLogFiles = function(logs) {
//   const letterLogs = [];
//   const digitLogs = [];
    
//   logs.forEach(log => {
//     if (/ \d/.test(log)) {
//       digitLogs.push(log);
//     } else {
//       letterLogs.push(log);
//     }
//   });
    
//   letterLogs.sort((a, b) => {
//     const aBody = a.slice(a.indexOf(' ') + 1);
//     const bBody = b.slice(b.indexOf(' ') + 1);
//     const c = aBody.localeCompare(bBody);
//     if (c) return c; // if the bodies r diff, sort by body
//     return a.localeCompare(b); // if the bodies r same, sort by identifier
//   });
    
//   return [...letterLogs, ...digitLogs];
// };

const reorderLogFiles = (logs) => {
  const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
  const isNum = c => /\d/.test(c);

  // if body same then compare identifier
  const compare = (a, b) => {
      const n = body(a).localeCompare(body(b));

      console.log(`body(a): ${body(a)}, body(b): ${body(b)}`)
      console.log(`n : ${n}`);

    if (n !== 0) return n;
    return a.localeCompare(b);  // if the strings after the identifiers r the same (n=0), compare identifiers
  };

  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    if (isNum(body(log))) digitLogs.push(log);
    else letterLogs.push(log);
  }

  console.log('letterLogs:')
  console.log([...letterLogs])
  console.log('digitLogs:')
  console.log([...digitLogs])
//   console.log(letterLogs)
  return [...letterLogs.sort(compare), ...digitLogs];
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(reorderLogFiles(logs))