class node
{
    constructor() {
        this.data =0;
        this.priroty=0;
        this.next=null;
    }
}
function newNode(d,p)
{
    var temp = new node();
    temp.data =d;
    temp.priroty=p;
    temp.next=null;
    return temp

}

function push(head,d,p)
{
    var start = head;
    var temp =newNode(d,p)
    if(head.priroty>p)
    {
        temp.next = head;
        head=temp;
    }
    else
    {
        while(start.next != null && start.next.priroty<p)
        {
            start = start.next;
        }
        temp.next= start.next;
        start.next = temp;
    }
    return head
      
}

var pq = newNode(3,4)
pq =push(pq,1,2)
console.log(pq)