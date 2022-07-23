head = [1,2,3,4,5]  // Output: [5,4,3,2,1]

var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

////////////////////////////////////////////////////////////////
// same as above, but w/o list destructuring....
// var reverseList = function(head) {

//     let cur = head;
//     let prev = null;
//     let next = null;
        
//     while (cur) {
//         next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//     }
        
//     return prev;
// }

console.log(reverseList(head))