head = [1,2]  // Output: [2,1]

var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

console.log(reverseList(head))