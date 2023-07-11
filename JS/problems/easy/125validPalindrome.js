s = "A man, a plan, a canal: Panama"


var isPalindrome = function(s) {
    
  // turn string to lowercase and use regex to remove non-alphanumeric
  s = s.toLowerCase();
  s = s.replace(/[^A-Za-z0-9]/g, '');

  let start = 0;
  let end = s.length-1; 
  
  while (start < end){
      
    if(s[start] !== s[end]) return false
    start++;
    end--;
  }
  return true
};


// var isPalindrome = function(s) {
//     var condensed = s.replace(/[^a-z0-9]/ig, "").toLowerCase()
    
//     return (condensed === "") ? "true" : condensed === condensed.split("").reverse().join("")
// };

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var isPalindrome = function(s) {
}

console.log(isPalindrome)