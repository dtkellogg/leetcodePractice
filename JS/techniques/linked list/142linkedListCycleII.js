head = [3,2,0,-4], pos = 1  // Output: tail connects to node index 1

var detectCycle = function(head){
  let slow = head;
  let fast = head;
  while(fast && fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      slow = head;
      while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}

console.log(detectCycle(head))