class node
{
    constructor(maxcapacity)
    {
        this.data =Array(maxcapacity)
        this.capacity = maxcapacity;
        this.length = 0;
        this.top = -1;
    }

    isFull()
    {
        return this.length==this.capacity;
    }
    isEmpty()
    {
        return this.length==0;
    }
    reverse()
    {
        if(this.isEmpty())
        {
            return undefined;
        }
        else
        {
            for(let i=this.length;i>-1;i--)
            {
                console.log(this.data[i])
            }
        }
    }
    push(data)
    {
        if(this.isFull())
        {
            return overflow;
        }
        else
        {
            this.top =this.top+1;
            this.data[this.top]=data;
            this.length++
        }
    }
    pop()
    {
        if(this.isEmpty()){
            return underflow;
        }
        else
        {
            let temp = this.data[this.top]
            this.data[this.top]=temp.next;
            this.top= this.top-1;
            this.length--

            return temp;
        }
    }
  
}
const s = new node(5)
s.push(1)
s.push(3)
console.log(s)
s.pop();
console.log(s)
s.push(3)
s.push(2)
s.push(6)
console.log(s)
s.reverse();
