list1 = [1,2,4], list2 = [1,3,4]  // Output: [1,1,2,3,4,4]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeTwoLists (l1, l2) {
  let merge = new Node()
  let head = merge
      
  while(l1 && l2) {
    if(l1.val < l2.val) {
      merge.next = l1
      l1 = l1.next
    } else {
      merge.next = l2
      l2 = l2.next
    }
    merge = merge.next
  }
  
  if(!l1) merge.next = l2
  else if(!l2) merge.next = l1
  
  return head.next
};

console.log(mergeTwoLists(list1, list2))