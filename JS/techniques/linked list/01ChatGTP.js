// Problem:
// Given a linked list, write a function that reverses the order of the nodes. 
// The function should return the new head of the reversed list.

// For example, given the linked list: 1 -> 2 -> 3 -> 4 -> 5, the function 
// should return the linked list: 5 -> 4 -> 3 -> 2 -> 1.

// 🔥 Two Pointers:
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// recursive solution:
// var reverseList = function(head, prev = null) {
//   if (!head) return prev;
//   let next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };


// Test the function
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const reversedHead = reverseLinkedList(head);

// Traverse the reversed linked list and print the values
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}