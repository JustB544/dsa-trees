/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    function sum(node){
      if (!node){
        return 0;
      }
      let _sum = 0;
      node.children.forEach(v => _sum += sum(v));
      return node.val + _sum;
    }
    return sum(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    function count(node){
      if (!node){
        return 0;
      }
      let _count = 0;
      node.children.forEach(v => _count += count(v));
      return node.val % 2 + _count;
    }
    return count(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    function count(node){
      if (!node){
        return 0;
      }
      let _count = 0;
      node.children.forEach(v => _count += count(v));
      return Number(node.val > lowerBound) + _count;
    }
    return count(this.root);
  }
}

module.exports = { Tree, TreeNode };
