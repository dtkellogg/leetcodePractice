instructions = "GGLLGG"

var isRobotBounded = function(instructions) {
    let steps = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ];
    let x = y = 0;
    
    let currStep = 1;
    let turn = (direction) =>{
        if(direction === "L") currStep--;
        else if(direction === "R") currStep++;
        else if(direction === "G") {
            x += steps[currStep][0];
            y += steps[currStep][1];
        }
        if(currStep < 0) currStep = 3;
        if(currStep === 4) currStep = 0;
    }
    
    
    for(let i=0; i<instructions.length*4; i++){
    // for(let i=0; i<instructions.length*4; i++){ // this also works... i'm assuming the x4 is to make sure in circle
        turn(instructions[i]);
    }
	// I was stucked at the last return. The following line might be the key line for this problem.
	// as long as the robot is at (0,0) or not going north, it should be true.
    return (currStep !== 1) || (x === 0 && y === 0 );
};


////////////////////////////////////////////////////////////////
// PRACTICE


console.log(isRobotBounded(instructions))