class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(value){
        if(!this.adjecencyList[value]){
            this.adjecencyList[value]=new Set()
        }
    }
    addEdges(value1,value2){
        if(!this.adjecencyList[value1]){
            this.adjecencyList[value1]=new Set()
        }
        if(!this.adjecencyList[value2]){
            this.adjecencyList[value2]=new Set()
        }
        this.adjecencyList[value1].add(value2)  
        this.adjecencyList[value2].add(value1)  
    }
    hasEdge(vertex1,vertex2){
        return (this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex1].has(vertex2))
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeEdge(vertex){
        if(this.adjecencyList[vertex]){
            return
        }
        for (const adjecencyVertex of this.adjecencyList[vertex]) {
            this.removeEdge(vertex,adjecencyVertex)
        }
        delete this.adjecencyList[vertex]
    }

}