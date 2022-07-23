num = 123  // Output: "One Hundred Twenty Three"

var numberToWords = function(num) {
  const map19 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const mapDozens = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const map = {
    '10e8': 'Billion',
    '10e5': 'Million',
    '10e2': 'Thousand',
    '10e1': 'Hundred',
  };
  
  function word(n) {

    console.log("n")
    console.log(n)

    if (n === 0) return [];
    if (n <= 19) return [map19[n]];
    if (n <= 99) return [mapDozens[Math.trunc(n / 10)], ...word(n % 10)];
    for (const div of Object.keys(map)) {
      if (Math.trunc(n / div) > 0) {
          
          console.log("[...word(Math.trunc(n / div)), map[div], ...word(n % div)]")
          console.log(...word(Math.trunc(n / div)), map[div], ...word(n % div))

        return [...word(Math.trunc(n / div)), map[div], ...word(n % div)];
      }
    }

    console.log("--------------------------------")

  }
  
  return word(num).join(' ') || 'Zero';
};


// same thing as above, but w/o comments
// var numberToWords = function(num) {
//   const map19 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
//     'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//   const mapDozens = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
//   const map = {
//     '10e8': 'Billion',
//     '10e5': 'Million',
//     '10e2': 'Thousand',
//     '10e1': 'Hundred',
//   };
  
//   function word(n) {
//     if (n === 0) return [];
//     if (n <= 19) return [map19[n]];
//     if (n <= 99) return [mapDozens[Math.trunc(n / 10)], ...word(n % 10)];
//     for (const div of Object.keys(map)) {
//       if (Math.trunc(n / div) > 0) {
//         return [...word(Math.trunc(n / div)), map[div], ...word(n % div)];
//       }
//     }
//   }
  
//   return word(num).join(' ') || 'Zero';
// };


////////////////////////////////////////////////////////////////

const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);

var numberToWords = function(num) {
  console.log(`----------------------------------------------------------------`)
  if (num === 0) {
    return 'Zero';
  }
  
  if (num <= 20) {
    return translations.get(num);
  }
  
  let result = [];
  
  for (let [value, translation] of translations) {
    const times = Math.floor(num / value);

    console.log(`num: ${num}, value: ${value}, translation: ${translation}`)
    console.log(`num / value: ${num / value}`)
    // console.log(times)
    
    if (times === 0) {
      continue;
    }

    console.log(`----------------------------------------------------------------`)
    
    num -= times * value;
    
    if (times === 1 && value >= 100) {
      result.push('One', translation);
      continue;
    }
    
    if (times === 1) {
      result.push(translation);
      continue;
    }
    
    result.push(numberToWords(times), translation);
    console.log(result)
  }
  
  return result.join(' ');
};

////////////////////////////////////////////////////////////////
// PRACTICE

var numberToWords = function(num) {
}

console.log(numberToWords(num))