items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]

var highFive = function(items) {
    let scoresMap = {}
    
    for(const [id, score] of items) {
        console.log(scoresMap)
        if(scoresMap[id]) {
            scoresMap[id].push(score)
        } else {
            scoresMap[id] = [score]
        }
    }

    // console.log(scoresMap)
    
    const getAvg = (res, id) => {
        const top5 = scoresMap[id]
            .sort((a,b) => b - a)
            .reduce((sum,c,i) => {
                if(i<5) {
                    sum += c
                }
                return sum
            }, 0)

            console.log(`top5: ${top5}`)
            console.log(`scoresMap[id]: ${scoresMap[id]}`)
        
        res.push([id, Math.floor(top5 / 5)])
        return res
    }

    console.log(scoresMap)
    
    return Object.keys(scoresMap).reduce(getAvg, [])
};

console.log(highFive(items))