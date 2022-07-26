logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

var reorderLogFiles = function(logs) {
    const body = s => s.slice(s.indexOf(" ") + 1)
    const isNum = c => /\d/.test(c)
    
    let letLogs = []
    let numLogs = []
    
    for(const log of logs) {
        if(isNum(body(log))) numLogs.push(log);
        else letLogs.push(log)
    }

    const sorter = (a,b) => {
        const n = body(a).localeCompare(body(b))
        if(n !== 0) return n
        return a.localeCompare(b)
    }
    
    return [...letLogs.sort(sorter), ...numLogs]
};


console.log(reorderLogFiles(logs))