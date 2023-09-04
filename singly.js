class node
{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class singly
{
    constructor(data) {
        const d = new node(data);
        this.head=d;
        this.tail=d;
        this.length=1;
        
    }
    push(data)
    {
        const dd= new node(data)
            if(!this.length)
            {
                this.head = dd;
                this.tail = dd;
            }
            else
            {
                this.tail.next=dd;
                this.tail=dd;
            }
        this.length++;
    }
    pop()
    {
        if(!this.length)
        {
            return undefined
        }
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
        }
        else
        {
            var temp = this.head;
            var prev = this.head;
            while(temp.next)
            {
                prev = temp;
                temp = temp.next;
            }
            this.tail=prev;
            this.tail.next =null;
        }
        this.length--;
    }
}
const s = new singly(1);
s.push(2);
console.log(s)