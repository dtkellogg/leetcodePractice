var removeElements = function(head, val) {
  if (!head) return head;

// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
  while (head && head.val === val) {
    head = head.next
  }
  
// skip any nodes whos values match the parameters and set it to the node after
// if the node is found, set curr.next to the node after it then try again
// otherwise iterate forward
  let curr = head;
  while(curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  
  return head;
};


///////////////////////////////////////////////////////////////
// same as above, but w/o comments

var removeElements = function(head, val) {
  if (!head) return head;

  while (head && head.val === val) {
    head = head.next
  }
  
  let curr = head;
  while(curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  
  return head;
};