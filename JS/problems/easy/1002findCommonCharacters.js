

var commonChars = function(A) {
    let start = A[0].split('');
    
    for(let word of A) {
        const chars = word.split('');
        start = start.filter(sChar => {
            const idx = chars.indexOf(sChar);
            
            // if the char has been found, set it a value so it doesnt get discovered again
            if (idx > -1) {
                chars[idx] = 'found';
                return true;
            }
            
            return false;
        });
    }
    
    return start;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(commonChars(A))