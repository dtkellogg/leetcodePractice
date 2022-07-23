logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

var reorderLogFiles = function(logs) {
    const body = s => s.slice(s.indexOf(" ") + 1)
    const isNum = c => /\d/.test(c)

    let letterLogs = []
    let digitLogs = []
    
    for(let log of logs) {
        if(isNum(body(log))) digitLogs.push(log);
        else letterLogs.push(log)
    }

    const compare = (a, b) => {
        const n = body(a).localeCompare(body(b))
        if(n !== 0) return n
        return a.localeCompare(b)
    }
    
    return [...letterLogs.sort(compare), ...digitLogs]
};

console.log(reorderLogFiles(logs))