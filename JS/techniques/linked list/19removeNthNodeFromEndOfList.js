var removeNthFromEnd = function(head, n) {
  let hare = head, curr = head;
  while (n--) {
    hare = hare.next;
  }
  // move hare to the end of the list and curr to the desired spot n places from the end - 1
  while (hare && hare.next) {
    curr = curr.next;
    hare = hare.next;
  }
  // delete node by reodering nodes
  if (!hare) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }
  return head;
};

console.log(removeNthFromEnd(head, n))