//height of tree: Longest path from the root to the deepest node of tree
class TreeNode
{
    constructor(data)
    {
        this.data=data;
        this.right=null;
        this.left=null;
    }
}


function Height(node)
{
    if(node==null)
    {
        return 0;
    }
    let leftHeight=Height(node.left);
    let rightHeight=Height(node.right);

    let height=Math.max(leftHeight,rightHeight)+1;
    return height;
}

let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
root.left.right=new TreeNode(5);
root.right.right=new TreeNode(7);
root.right.left=new TreeNode(6);


const height=Height(root);

console.log(height);


//another way to find minimal depth of bt
var minDepth = function (root) {

    if (root == null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }

    if (root.left === null) {
        return minDepth(root.right) + 1;
    }

    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};