/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function getMin(node){
      return (node === null) ? 0 : Math.min(1 + getMin(node.left), 1 + getMin(node.right));
    }
    return getMin(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function getMax(node){
      return (node === null) ? 0 : Math.max(1 + getMax(node.left), 1 + getMax(node.right));
    }
    return getMax(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function getMaxSum(node){
      if (!node){
        return {max: 0, max_path: 0};
      }
      const left = getMaxSum(node.left);
      const right = getMaxSum(node.right);
      const max = Math.max(0, node.val + Math.max(0, left.max, right.max));
      const max_path = Math.max(0, node.val + Math.max(left.max + right.max), left.max_path, right.max_path);
      // console.log(node.val, max, max_path);
      return {max, max_path}
    }
    return getMaxSum(this.root).max_path;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    function getMinVal(node){
      if (!node){
        return null;
      }
      const left = getMinVal(node.left);
      const right = getMinVal(node.right);
      const val = (node.val > lowerBound) ? node.val : null;
      return (val === null && left === null && right === null) ? null : 
      Math.min((val === null) ? Infinity : val, (left === null) ? Infinity : left, (right === null) ? Infinity : right);
    }
    return getMinVal(this.root, lowerBound);
  }

  // /** Further study!
  //  * areCousins(node1, node2): determine whether two nodes are cousins
  //  * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
