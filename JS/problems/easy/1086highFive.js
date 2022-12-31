items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]  // [[1,87],[2,88]]


var highFive = function(items) {
    const scoreBoard = {};
    for(const [id, score] of items) {
        if(scoreBoard[id]) {
            scoreBoard[id].push(score);
        } else {
            scoreBoard[id] = [score];
        }
    }
    const getAverage = (res, student) => {  // (acc, curr)
        const topFive = scoreBoard[student]
        .sort((a, b) => b - a)
        .reduce((total, curr, i) => {
            if(i < 5) total += curr;
            return total;
        });
        res.push([student, Math.floor(topFive / 5)]);
        return res;
    }
    return Object.keys(scoreBoard).reduce(getAverage, [])
};


// var highFive = function(items) {
//     let studentMap = new Map();
    
//     for (let [id, score] of items) {
//         if (!studentMap.has(id)) studentMap.set(id, []);
//         studentMap.get(id).push(score);
//     }
    
//     let result = [];
    
//     for (let [key, value] of studentMap) {
//        let sum = value.sort((a, b) => b - a).slice(0, 5).reduce((prev, curr) => prev + curr);
//         result.push( [key, Math.floor(sum / 5) ] );
//     }
    
//     return result.sort((a, b) => a[0] - b[0]);
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(highFive(items))