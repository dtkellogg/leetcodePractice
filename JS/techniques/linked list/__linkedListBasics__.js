// ------------- Definitions --------------- //
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}


// ------------- Methods --------------- //
LinkedList.prototype.size = function() {
  let count = 0; 
  let node = this.head;
  while (node) {
    count++;
    node = node.next
  }
  return count;
}

LinkedList.prototype.clear = function() {
  this.head = null;
}

LinkedList.prototype.getFirst = function() {
  return this.head;
}

LinkedList.prototype.getLast = function() {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next
    }
  }
  return lastNode
}


// ------------- Methods to INSERT into a Singly Linked List --------------- //
LinkedList.prototype.insertAtBeginning = function(data) {
//  A newNode object is created with property data and next = null  //
  let newNode = new ListNode(data);
//  The pointer next is assigned head pointer so that both pointers now point at the same node.  //
  newNode.next = this.head;
//  As we are inserting at the beginning the head pointer needs to now point at the newNode.   //
  this.head = newNode;
  return this.head;
}


LinkedList.prototype.insertAtEnd = function(data) {
//  A newNode object is created with property data and next=null  //
  let newNode = new ListNode(data);
//  When head = null i.e. the list is empty, then head itself will point to the newNode.  //
  if(!this.head) {
    this.head = newNode;
    return this.head;
  }
//  Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.  //
  let tail = this.head;
  while(tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
}


//  A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.  //

LinkedList.prototype.getAt = function(index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
}

//  The insertAt() function contains the steps to insert a node at a given index.  //

LinkedList.prototype.insertAt = function(data, index) {
  // if the list is empty i.e. head = null
  if (!this.head) {
    this.head = new ListNode(data);
    return;
  }
  //  if new node needs to be inserted at the front of the list i.e. before the head.   //
  if (index === 0) {
    this.head = new ListNode(data, this.head);
    return;
  }
  //  else, use getAt() to find the previous node.  //
  const previous = this.getAt(index - 1);
  let newNode = new ListNode(data);
  newNode.next = previous.next;
  previous.next = newNode;       

  return this.head
}

// ------------- Methods to DELETE from a Singly Linked List ------------- //

LinkedList.prototype.deleteFirstNode = function() {
  if(!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
}

LinkedList.prototype.deleteLastNode = function() {
  if(!this.head) {
    return null;
  }
  // if only one node in the list //
  if(!this.head.next) {
    this.head = null;
    return;
  }
  let previous = this.head;
  let tail = this.head.next;
  
  while(tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }
  
  previous.next = null;
  return this.head;
}

LinkedList.prototype.deleteAt = function(index) {
// when list is empty i.e. head = null //
  if (!this.head) {
    this.head = new ListNode(data);
    return;
  }
// node needs to be deleted from the front of the list i.e. before the head. //
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
// else, use getAt() to find the previous node. //
  const previous = this.getAt(index - 1);
  
  if (!previous || !previous.next) {
    return;
  }
  
  previous.next = previous.next.next;     
  return this.head
}


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head
//   }
// }

// LinkedList.prototype.size = function() {
//   let count = 0, node = this.head
//   while(node) {
//     count++
//     node = node.next
//   }
//   return count
// }

// LinkedList.prototype.clear = function() {
//   this.head = null
// }

// LinkedList.prototype.getFirst = function () {
//   return this.head
// }

// LinkedList.prototype.getLast = function () {
//   let lastNode = this.head
//   while(lastNode.next) {
//     lastNode = lastNode.next
//   }
//   return lastNode
// }

// LinkedList.prototype.insertAtBeginning = (data) => {
//   let newNode = new ListNode(data)
//   newNode.next = this.head
//   this.head = newNode
//   return this.head
// }

// LinkedList.prototype.insertAtEnd = function(data) {
//   let newNode = new ListNode(data), lastNode = this.head
//   while(lastNode.next) {
//     lastNode = lastNode.next
//   }
//   lastNode.next = newNode
//   return this.head
// }

// LinkedList.prototype.getAt = function(index) {
//   let node = this.head, count = 0
//   while(count < index) {
//     count++
//     node = node.next
//   }
//   return node
// }

// LinkedList.prototype.insertAt = function(data, index) {
//   let prevNode = this.getAt(index - 1), newNode = new ListNode(data)
//   newNode.next = prevNode.next
//   prevNode.next = newNode
//   return this.head
// }

// LinkedList.prototype.deleteFirstNode = function() {
//   this.head = this.head.next
//   return this.head
// }

// LinkedList.prototype.deleteLastNode = function() {
//   let secondLastNode = this.head, lastNode = this.head.next
//   while(secondLastNode.next) {
//     secondLastNode = lastNode
//     lastNode = lastNode.next
//   }
//   secondLastNode.next = null
//   return this.head
// }

// LinkedList.prototype.deleteAt = function(index) {
//   let node = this.getAt(index - 1)
//   node.next = node.next.next
//   return this.head
// }


////////////////////////////////////////////////////////////////////////////////
//  ------------- Examples using the Class definitions above) ------------- //

let node1 = new ListNode(1);
let node2 = new ListNode(2);

node1.next = node2

let list = new LinkedList(node1);

// console.log('list:', list)

// console.log('list.head.next.data:', list.head.next.data);

// console.log('Object.getPrototypeOf(list):', Object.getPrototypeOf(list));
// console.log('Object.getOwnPropertyNames(list):', Object.getOwnPropertyNames(list));

// const arr = new Array(1,2,3);

// console.log('arr:', arr);

console.log('list.size()', list.size())
console.log('list.getLast()', list.getLast())

// console.log('list.insertAtBeginning(3):', list.insertAtBeginning(3), 'list:', list)