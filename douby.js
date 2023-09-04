class node
{
    constructor(data)
    {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
class doubly
{
    constructor(data) {
        const v = new node(data)
        this.head=v;
        this.tail=v;
        this.length=1;
    }
    push(data)
    {
        const vv = new node(data);
        if(!this.length)
        {
            this.head=vv
            this.tail=vv
        }
        else
        {
            this.tail.next =vv;
            this.previous=this.tail;
            this.tail=vv;
        }
        this.length++;
    }
}
const d = new doubly(10)
d.push(20)
console.log(d)