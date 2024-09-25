//types of binary tree
//1. Full binary tree :means each node have 0 or 2 children;
//2. COmplete Binary tree : Each level is completely filled except the last
//  level if filled then by left side

//3. Perfect Binary tree : Means all level should be completely filled;

//4. Balanced Binary tree: Where height cannot exceed the log of n 

//5. Degenerate trees/skewed tree: means not completely or balanced



class TreeNode
{
    constructor(data)
    {
        this.data=data;
        this.right=null;
        this.left=null;
    }
}

let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
root.left.right=new TreeNode(5);

console.log("Root of the Tree",root);


//traversing the tree nodes;

//two algos for searching 

//bfs and dfs
//breath first search and depth first search




