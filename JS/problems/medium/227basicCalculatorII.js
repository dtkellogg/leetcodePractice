s = "3+2*2"  // Output: 7
// s = " 3/2 "  // Output: 1
const calculate = (s) => {
  if (s == null || s.length === 0) return null;

  // remove space
  s = s.replace(/\s/g, '');

  let st = [];
  let n = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];


    // number
    if (/\d/.test(c)) n = n * 10 + Number(c);  // e.g. '14' -> 1 * 10 + 4

    // sign or last number
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === '-') st.push(-n);
      else if (sign === '+') st.push(n);
      else if (sign === '*') st.push(st.pop() * n);
      else if (sign === '/') st.push(~~(st.pop() / n));

      sign = c;
      n = 0;
    }

    console.log(`c: ${c}; n: ${n}; /\d/.test(c): ${/\d/.test(c)}`)
    console.log("st Array")
    console.log(st)
    console.log("--------------------------------------------------------------")
  }
  return st.reduce((a, b) => a + b);
};

// same algorithm as above, but w/o comments

const calculate = (s) => {
  if (s == null || s.length === 0) return null;
  s = s.replace(/\s/g, '');
  let st = [];
  let n = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (/\d/.test(c)) n = n * 10 + Number(c);  // e.g. '14' -> 1 * 10 + 4
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === '-') st.push(-n);
      else if (sign === '+') st.push(n);
      else if (sign === '*') st.push(st.pop() * n);
      else if (sign === '/') st.push(~~(st.pop() / n));

      sign = c;
      n = 0;
    }
  }
  
  return st.reduce((a, b) => a + b);
};

console.log(calculate(s))