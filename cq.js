class cq
{
    constructor(maxcapacity) {
        this.data = Array(maxcapacity)
        this.capacity= maxcapacity;
        this.length= 0;
        this.front=-1;
        this.rear = -1;
        
    }
    isFull()
    {
        return this.length==this.capacity;
    }
    isEmpty()
    {
        return this.length==0;
    }
    enqueue(data)
    {
        if(!this.isFull())
        {
            this.rear = (this.rear+1)%this.capacity;
            this.data[this.rear]=data;
            this.length++
            this.front=0
            if(this.front==-1)
            {
                this.front== this.rear;
            }
        }
        return data
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return undefined;
        }
        else
        {
            let temp = this.data[this.front]
            this.data[this.front]=null;
            this.front=(this.front+1)%this.capacity;
            this.length--
            if(this.isEmpty())
            {
                this.front=-1;
                this.rear=-1;
            }
        }
    }
}
const d = new cq(4)
d.enqueue(3)
d.enqueue(2)
console.log(d)
d.dequeue()
console.log(d)