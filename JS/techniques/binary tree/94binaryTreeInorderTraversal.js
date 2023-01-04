/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
**/

root = [1,null,2,3]  // Output: [1,3,2]

function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
      root = stack.pop();
      res.push(root.val);
      root = root.right;
  }

  return res;
}

console.log(inorderTraversal(root));