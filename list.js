class graph
{
    constructor()
    {
        this.list = {};
    }
    addvertex(vertext)
    {
        if(!this.list[vertext])
        {
            this.list[vertext]=new Set();
        }
    }
    addedges(vertext1,vertext2)
    {
        if(!this.list[vertext1])
        {
            this.addvertex[vertext1]
        }
        if(!this.list[vertext2])
        {
            this.addvertex[vertext2]
        }
        this.list[vertext1].add(vertext2)
        this.list[vertext2].add(vertext1)
    }
    display()
    {
        for(let vertex in this.list)
        {
            console.log(vertex+"->"+[...this.list[vertex]])
        }
    }
    hasedges(vertext1,vertext2)
    {
        return(this.list[vertext1].has(vertext2) && this.list[vertext2].has(vertext1))
    }
    removeedeges(vertext1,vertext2)
    {
        this.list[vertext1].delete(vertext2)
        this.list[vertext2].delete(vertext1)
    }
    removevertex(vertex)
    {
        if(!this.list[vertex])
        {
            return;
        }
        for(let v in this.list)
        {
            this.removeedeges(vertex,v)
        }
        delete this.list[vertex]
    }
}
const g = new graph();
g.addvertex("a")
g.addvertex("b")
g.addvertex("c")
g.addedges("a","b")
g.addedges("b","c")
g.addedges("a","c")
g.display()
console.log(g)