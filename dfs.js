class graph
{
    constructor(v) {
        this.V = v;
        this.array = new Array(v);
        for(let i =0;i<=v;i++)
        {
            this.array[i]=[]
        }
    }
    addedges(v,w)
    {
        this.array[v].push(w);
    }
    dfs(v)
    {
        let visited = new Array(this.V)
        for(let i =0;i<this.V;i++)
        {
            visited[i]=false;
        }
        this.DFSUtil(v,visited)
    }
    DFSUtil(v,visited)
    {
        visited[v]=true;
        console.log(v+" ")
        for(let i of this.array[v].values())
        {
            if(!visited[i])
            {
                this.DFSUtil(i,visited)
            }
        }
    }
}
const g = new graph(4);
g.addedges(0,1)
g.addedges(0,2)
g.addedges(1,2)
g.addedges(2,0)
g.addedges(2,3)
g.addedges(3,3)
g.dfs(2)