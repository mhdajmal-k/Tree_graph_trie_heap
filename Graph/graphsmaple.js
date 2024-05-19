class Graph{
    constructor() {
        this.list = {};
    }

    addVertex(v){
        if(!this.list[v]){
            this.list[v]=[];
        }
    }

    addEdge(v1,v2){
        if(!this.list[v1]) this.addVertex(v1);
        if(!this.list[v2]) this.addVertex(v2);
        this.list[v1].push(v2);
        this.list[v2].push(v1);
    }

    removeEdge(v1,v2){
        if(!this.list[v1]) return "no vertex";
        if(!this.list[v2]) return "no vertex";
        this.list[v1]=this.list[v1].filter((v)=>v!==v2);
        this.list[v2]=this.list[v2].filter((v)=>v!==v1);
    }

    removeVertex(v){
        if(!this.list[v]) return "no vertex";
        while(this.list[v].length){
            let adj = this.list[v].pop();
            this.removeEdge(v,adj);
        }
        delete this.list[v];
    }

    BFS(start){
        let queue = [start];
        let data = [];
        let visited = {};
        visited[start]=true;
        while(queue.length){
            let curr = queue.shift();
            data.push(curr);
            this.list[curr].forEach(v=>{
                if(!visited[v]){
                    queue.push(v);
                    visited[v]=true;
                }
            })
        }
        return data;
    }

    DFS(start){
        let stack = [start];
        let data=[];
        let visited={};
        visited[start]=true;
        while(stack.length){
            let curr = stack.pop();
            data.push(curr);
            this.list[curr].forEach(v=>{
                if(!visited[v]){
                    stack.push(v);
                    visited[v]=true;
                }
            });
        }
        return data;
    }

    hasCycle(){
        let visited=[];
        let stack = [];
        for (let vertex in this.list){
            if(!visited.includes(vertex)){
                stack.push(vertex);
                while(stack.length){
                    let curr = stack.pop();
                    if(visited.includes(curr)){
                        return true;
                    }
                    visited.push(curr);
                    for(let v of this.list[curr]){
                        if(!visited.includes(v)){
                            stack.push(v);
                        }
                    }
                }
            }
        }
        return false;
    }

    degree(v){
        if(!this.list[v]){
            return 0;
        }
        return this.list[v].length;
    }

    
}

let g = new Graph();
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("A", "D");
g.addEdge("C", "D");
console.log(g.degree("A"));