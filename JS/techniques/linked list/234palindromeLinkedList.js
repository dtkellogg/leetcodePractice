

////////////////////////////////
// recursion:

var isPalindrome = function(head) {
    let curr = head;
    const traverse = node => {
        if (node === null) {
            return true;
        }
        // traverse to the end of the list first
        const prevIsSame = traverse(node.next);
        // when the call stack bounces back, compare the values 
        // from the head and from the bottom up
        const currIsSame = curr.val === node.val;
        curr = curr.next;
        return prevIsSame && currIsSame;
    }
    return traverse(head);
};

////////////////////////////////////////////////////////////////
// different solution:

var isPalindrome = function(head) {
    // lists with 0 or 1 node will automatically be palindrome 
    if(head == null || head.next == null) return true;
        // add two indices, slow will eventually point to the mid node of the palindrome
        var slow = head;
        // fast is a helper, it will be assigned some conditions to help make sure that slow point to the mid node
        var fast = head;

        // both slow and fast point to first node at the beginning
        // while both of the next two nodes of fast exist, slow takes 1 step and fast takes 2 steps forward
        // in this way, slow will definately point to the mid node (or the first of the 2 mid nodes if there are even number of nodes in the list) at the end of the loop
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse all the ndoes after the slow node, then assign the reversed list back to it
        slow.next = reverseList(slow.next);
        slow = slow.next;

        // after the reverse, compare the reverse list with the original list from the beginning
        while(slow != null) {
            // if any pair of nodes are not equal, return false
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};

var reverseList = function(head) {
        // pre will hold the reversed list
        var pre = null;
        // next will be a temporary variable to store the remaining nodes in the list at each loop
        var next = null;

        // while there are nodes remaining in the list
        while(head != null) {
            // temporarily store the remaining list without the current node
            next = head.next;
            // take the current node of the list, append the reversed nodes to it, then assign it back to the reversed list
            head.next = pre;
            pre = head;
            // assign the remaining list back so head points to the new current node, repeat until there are nodes remaining in the list
            head = next;
        }
    
        return pre;
};


// same as above, but w/o comments:

var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
    var slow = head;
    var fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while(slow != null) {
        if(head.val != slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};

var reverseList = function(head) {
    var pre = null;
    var next = null;
    while(head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};