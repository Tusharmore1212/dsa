class bfs
{
    constructor(v) {
        this.V =v;
        this.array = new Array(v);
        for(let i =0;i<v;i++)
        {
            this.array[i]=[];
        }    
    }
    addedges(v,w)
    {
        this.array[v].push(w);
    }
    bfs(s)
    {
        let visited = new Array(this.V)
        for(let i=0;i<this.V;i++)
        {
            visited[i]=false;
        }
        let queue = [];
        visited[s]=true;
        queue.push(s)
        while(queue.length>0)
        {
            s=queue[0]
            console.log(s+" ")
            queue.shift();

            this.array[s].forEach((a,i) => {
                if(!visited[a])
                {
                    visited[a]=true;
                    queue.push(a)
                }
            });
        }
    }
}
const g = new bfs(4)
g.addedges(0,1)
g.addedges(0,2)
g.addedges(1,2)
g.addedges(2,0)
g.addedges(2,3)
g.addedges(3,3)
g.bfs(2)
