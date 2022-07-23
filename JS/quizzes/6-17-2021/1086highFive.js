items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]

// var highFive = function(items) {
//     const map = new Map()
    
//     for (let item of items) {
//         const [student, score] = item
        
//         if(!map.get(student)) {
//             map.set(student, [score])
//         } else {
//             map.get(student).push(score)
//         }
//     }
    
//     const getAverage = (scores) => {
//         let res = []
//         scores.sort((a,b) => b - a)
//         for(let i=0; i<5; i++) {
//             res.push[scores[i]]
//         }
        
//         return Math.floor(res.reduce((a,c) => a + c, 0) / 5)
//     }
    
//     return map.entries().reduce()
//     // return [...map].reduce(getAverage, [])
// };

var highFive = function(items) {
    let obj = {}
    
    for(let [id, score] of items) {
        if(obj[id]) obj[id].push(score);
        else obj[id] = [score]
    }
    
    const getAvg = (res, student) => {
        const top5 = obj[student]
            .sort((a,b) => b -a)
            .reduce((a,c,i) => {
                if(i<5) a += c
                return a
            })
        res.push([student, Math.floor(top5 / 5)])
        // return res
    }
    
    console.log(obj)
    
    return Object.keys(obj).reduce(getAvg, [])
};


console.log(highFive(items))