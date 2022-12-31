n = 2
n = 18

var divisorGame = function(N) {
    let winArray = new Array(N+1).fill(false);
    /** This array represents whether a person will win or not with this current value
     */

    console.log(winArray)
    
    for (let i = 1; i <= N; i++) {

        for (let x = 1; x <= i/2; x++) {
                console.log(`i: ${i}`)
                console.log(`x: ${x}`)
            if(i % x === 0 && winArray[i - x] === false) {
                /** Here we check if the current x is the divisor or not 
                 * also if current turn is of Alice and [i - x] would be the
                 * the turn of Bob and that has to be false for Alice to win
                 */
                // console.log(`i: ${i}`)
                // console.log(`x: ${x}`)
                // console.log(`i: ${i}`)
                winArray[i] = true;
                console.log(winArray)
                break;
            }
        }
    }

     console.log(winArray)
    return winArray[N];
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(divisorGame(n))