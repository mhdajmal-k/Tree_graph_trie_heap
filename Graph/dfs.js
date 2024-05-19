class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addAddEdges(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    removeEdges(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return null
        }
        for (const adjcencyVertex of this.adjecencyList[vertex]) {
            this.removeVertex(adjcencyVertex)
        }
        delete this.adjecencyList(vertex)
    }
    dfs(start){
        let stack=[start]
        let result=[]
        let visited={}
        let curr
        visited[start]=true
        while (stack.length) {
            curr=stack.pop()
            result.push(curr)
            this.adjecencyList[curr].forEach(element => {
                if(!visited[element]){
                    visited[element]=true
                    stack.push(element)
                }                
            });
        }
        return result
    }

}


const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("F")
graph.addAddEdges("A","B")
graph.addAddEdges("D","C")
graph.addAddEdges("F","D")
graph.addAddEdges("A","F")

console.log(graph.dfs("A"));