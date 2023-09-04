  class node
  {
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
  }
  class stack
  {
    constructor(data)
    {
        const d = new node(data)
        this.top =d;
        this.length=1;
    }
    push(data)
    {
        const d = new node(data)
        if(!this.length)
        {
            this.top=d
        }
        else
        {
            d.next = this.top;
            this.top=d;
        }
        this.length++
    }
    pop()
    {
        if(!this.length)
        {
            return undefined;
        }
        if(this.length==1)
        {
            this.top=null;
        }
        else
        {
            let temp = this.top;
            this.top =temp.next;
            temp.next =null;
        
        }
        this.length--; 
   }
  }
  const s = new stack(10)
  s.push(20)
  s.push(30)
  console.log(s)
  s.pop();
  console.log(s)