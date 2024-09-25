//Binary Search tree 
//order of nodes matter than in binary tree
//like root the greater then root will be stored in right and less will
//be on left;

//insertion in bst or Binary search tree

class TreeNode
{
    constructor(data)
    {
        this.data=data;
        this.right=null;
        this.left=null;
    }
}

var root=null;

function Insert(data)
{
    root=InsertRec(root,data);
}


function InsertRec(root ,data)
{
    if(root==null)
    {
        root=new TreeNode(data);
        return root;
    }

    if(data<root.data)
    {
        root.left=InsertRec(root.left,data);
    }
    else
    {
        root.right=InsertRec(root.right,data );
    }

    return root;
}
Insert(5);
Insert(3);
Insert(7);
Insert(2);
Insert(4);


function Inorder(node)
{
    if(node==null)
    {
        return ;
    }
    Inorder(node.left);
    console.log(node.data);
    Inorder(node.right);
}
Inorder(root);


//searching

function Searching(root,key)
{
    if(root==null || root.data==key)
    {
        return root;
    }

    if(key<root.data)
    {
        return Searching(root.left,key);
    }
    else
    {
        return Searching(root.right,key);
    }
}

console.log(Searching(45));