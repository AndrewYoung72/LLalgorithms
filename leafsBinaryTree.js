// Get all of the nodes in a binary tree
// @param {BinaryTreeNode} root
// @returns {Numbers} array

function count_nodes_solution(root){
  let nodes = [];

  function flow(root) {
    if(root === null) {
      return nodes;
    } else {
      nodes.push(root.val);
      flow(root.left);
      flow(root.right);
    }
  }

  return nodes;
}
function count_leafs_solution(root){
  let leafs = [];

  function flow(root) {
    if(root === null) {
      return nodes;
    } else {
      if(root.left === null && root.right === null){
        leafs.push(root.val);
      }
      
      flow(root.left);
      flow(root.right);
    }
  }

  return leafs;
}