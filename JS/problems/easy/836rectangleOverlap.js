rec1 = [0,0,2,2], rec2 = [1,1,3,3]

var isRectangleOverlap = function(rec1, rec2) {
    return( 
        (Math.min(rec1[2],rec2[2]) - Math.max(rec1[0],rec2[0])>0)
            &&
		(Math.min(rec1[3],rec2[3]) - Math.max(rec1[1],rec2[1])>0)
    )
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isRectangleOverlap(rec1, rec2))