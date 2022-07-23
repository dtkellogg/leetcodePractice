head = [3,2,0,-4], pos = 1  // Output: true

// var hasCycle = function(head) {
//     if(!head) {
//         return false;
//     }
//     let hare = head;
//     let tortoise = head;
//     while(hare) {
//         if(!hare.next) {
//             return false;
//         } else {
//             hare = hare.next.next;
//             tortoise = tortoise.next;
//         }
//         if(tortoise == hare) {
//             return true;
//         }
//     }
//     return false;
// };


// 🔥🔥🔥 This way is the same as what is written for part 2 - 142 Linked List Cycle II
var hasCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}

console.log(hasCycle(head))