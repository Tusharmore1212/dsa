class node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class bst
{
    constructor() {
        this.root=null;
    }
    getrootNode()
    {
        return this.root
    }
    insert(data)
    {
        var newnode = new node(data)
        if(this.root == null)
        {
            this.root  = newnode;
        }
        else
        {
            this.insertnode(this.root,newnode)
        }
    }
    insertnode(node,newnode)
    {
        if(node.data>newnode.data)
        {
            if(node.left==null)
            {
                node.left=newnode;
            }
            else
            {
                this.insertnode(node.left,newnode)
            }
        }
        else
        {
            if(node.right==null)
            {
                node.right=newnode
            }
            else
            {
                this.insertnode(node.right,newnode)
            }
        }
    }
    search(root,data)
    {
        if(!root)
        {
            return false

        }
        if(root.data===data)
        {
            return true;
        }
        else if(data<root.data)
        {
            this.search(root.left,data)
        }
        else
        {
            this.search(root.right,data)
        }
    }
    preorder(node)
    {
        if(node!=null)
        {
            console.log(node.data)
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    findmin(node)
    {
        if(node.left==null)
        {
            return node;
        }
        else
        {
           return this.findmin(node.left)
        }
    }
}
const  b = new bst();
b.insert(2)
b.insert(5)
b.insert(1)
console.log(b)
var root = b.getrootNode();
console.log(b.preorder(root))
console.log(b.findmin(root))
