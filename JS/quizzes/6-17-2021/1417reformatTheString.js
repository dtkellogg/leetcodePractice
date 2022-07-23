s = "leetcode"

var reformat = function(s) {
    const isNum = c => /\d/.test(c)
    let nums = []
    let letters = []
    
    s = [...s]
    
    s.map((c) => {
        if(isNum(c)) {
            nums.push(c)
        } else {
            letters.push(c)
        }
    })
    
    if(Math.abs(nums.length - letters.length) > 1 || nums.length === 0 || letters.length === 0) return ""
    
    if(nums.length < letters.length) {
        [nums, letters] = [letters, nums]
    }
    
    return nums.map((num, i) => num + (letters[i] ? letters[i] : "")).join("")
}

console.log(reformat(s))