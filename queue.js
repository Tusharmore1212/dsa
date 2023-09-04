class node
{
    constructor(data) {
    this.data = data;
    this.next = null;        
    }
}
class queue
{
    constructor(data)
    {
        const d = new node(data)
        this.front= d;
        this.rear = d;
        this.length =1;
    }
    enqueue(data)
    {
        const d = new node(data)
        if(!this.length)
        {
            this.front =d;
            this.rear =d;
        }
        else
        {
            this.rear.next = d;
            this.rear =d;
        }
        this.length++;
    }
    dequeue()
    {
        if(!this.length)
        {
            return undefined;
        }
        if(this.length==1)
        {
            this.front = null;
            this.rear = null;
        }
        else
        {
            let temp = this.front;
            this.front = temp.next;
            temp.next=null;
        }
        this.length--;
    }
}
const j = new queue(3)
j.enqueue(6)
j.enqueue(5)
console.log(j)
j.dequeue();
console.log(j)
