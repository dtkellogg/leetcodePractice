chars = ["a","a","b","b","c","c","c"] //Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"] // Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

var compress = function(chars) {
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0];
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {

    console.log(`i: ${i}, j: ${j}, chars[i]: ${chars[i]}, cur: ${cur}, counter: ${counter}`)
    console.log("CHARS:")
    console.log(chars)

    if (chars[i] === cur) {
      counter++;

      console.log("IF")
    } else {
      chars[j] = cur;
      
      console.log("ELSE")
      console.log("CHARS IN ELSE")
      console.log(chars)
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];  // this makes it so the letter before the new letter
      }
      j++;
      cur = chars[i];
      counter = 1;
    }

    console.log("----------------------------------------------------------------")
    console.log(chars)
  }
  return j;
};

////////////////////////////////////////////////////////////////
// below is the same algorithm as above, just w/o comments

// var compress = function(chars) {
//   if (!chars.length) return 0;
//   let j = 0;
//   let cur = chars[0];
//   let counter = 0;
//   for (let i = 0; i <= chars.length; i++) {
//     if (chars[i] === cur) {
//       counter++;
//     } else {
//       chars[j] = cur;
//       if (counter > 1) {
//         const s = counter.toString();
//         for (let k = 0; k < s.length; k++) chars[++j] = s[k];
//       }
//       j++;
//       cur = chars[i];
//       counter = 1;
//     }
//   }
//   return j;
// };

////////////////////////////////////////////////////////////////
// The answer below is just to practice recognizing time complexity.
// It is n^2. The question states that it must be constant

// var compress = function(chars) {
//     let i = 0, j = 0;
//     while (i < chars.length) {
//         if (chars[j] === chars[i]) {
//             j++;
//         } else if (j > i + 1) {
//             const nums = (j - i).toString().split('');
//             chars.splice(i + 1, j - i - 1, ...nums);
//             j = i = i + 1 + nums.length;
//         } else if (j = i + 1) {
//             i = j;
//             j++;
//         }
//     }
//     return chars.length;
// };

console.log(compress(chars))