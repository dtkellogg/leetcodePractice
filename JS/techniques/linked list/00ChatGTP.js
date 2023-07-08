Question:
// Implement a function in a programming language of your choice that takes a 
// linked list as input and returns the middle node of the list. If the list 
// contains an even number of nodes, return the second middle node.

// For example, given the linked list: 1 -> 2 -> 3 -> 4 -> 5, the function
// should return the node with the value 3.

// Answer:
// To solve this problem, we can use the "two pointers" approach. We'll have two 
// pointers, a slow pointer and a fast pointer. The slow pointer will move one 
// node at a time, while the fast pointer will move two nodes at a time. When 
// the fast pointer reaches the end of the list, the slow pointer will be 
// pointing to the middle (or second middle) node.


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleNode(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}

// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middleNode = findMiddleNode(head);
console.log(middleNode.value);  // Output: 3