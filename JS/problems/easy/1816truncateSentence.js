s = "Hello how are you Contestant", k = 4  // Output: "Hello how are you"

// SOLUTION 1
// We could solve it easily via spliting.

// const truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');




// SOLUTION 2
// Let's see if we could have a better performance.
// Since there's no leading or trailing space, and words that are separated by only a single space, 
//    so if we want only the first k words, we could just count k spaces.
// And, don't forget to return whole s if there are not enough words.

const truncateSentence = (s, k) => {
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ' ' && --k === 0) return s.slice(0, i);
  }
  return s;
};




console.log(truncateSentence(s,k))