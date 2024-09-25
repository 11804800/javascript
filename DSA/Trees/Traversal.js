//Two type of algo 
//BFS: Breath first search 
//dfs :Depth first search'

//dfs : Inorder Postorder preorder;

//Inorder: left->root->right;

//preorder: root->left->right;

//postorder: left=>right->root


//Bfs: level order travsal
//in this we search by level by level



class TreeNode
{
    constructor(data)
    {
        this.data=data;
        this.right=null;
        this.left=null;
    }
}


//inorder search
function Inorder(node)
{
    if(node==null)
    {
        return;
    }
    Inorder(node.left);
    console.log(node.data);
    Inorder(node.right);
}


//preorder Traversal
function PreOrder(node)
{
    if(node==null)
    {
        return ;
    }
    console.log(node.data);
    PreOrder(node.left);
    PreOrder(node.right);
}

//postorder traversal

function Postorder(node)
{
    if(node==null)
    {
        return ;
    }
    Postorder(node.left);
    Postorder(node.right);
    console.log(node.data);
}

let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
root.left.right=new TreeNode(5);

root.right.right=new TreeNode(6);


console.log("Inorder")
Inorder(root);

console.log("PreOrder");
PreOrder(root);

console.log("post order")
Postorder(root);