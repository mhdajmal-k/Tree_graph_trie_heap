class Graph{
    constructor(){
        this.adjacency={}
    }
    addVertex(vertex){
        if(!this.adjacency[vertex]){
            this.adjacency[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacency[vertex1]){
            this.adjacency[vertex2]=new Set()
        }
        if(!this.adjacency[vertex2]){
            this.adjacency[vertex2]=new Set()
        }
        this.adjacency[vertex1].add(vertex2)
        this.adjacency[vertex2].add(vertex1)
    }
    // bfs(start){
    //     let queue=[start]
    //      let result=[]
    //      let visited={}
    //      let currentVertex
    //      visited[start]=true
    //      while(queue.length){
    //         currentVertex=queue.shift()
    //         result.push(currentVertex)
    //         this.adjacency[currentVertex].forEach(vertex => {
    //            if(!visited[vertex]){
    //                queue.push(vertex)
    //                visited[vertex]=true
    //            }
    //         });

    //      }
    //      return result
    // }

    bfs(start){
        let queue=[start]
        let result=[]
        let visited={}
        let currentVertex
        visited[start]=true
        while (queue.length) {
            currentVertex=queue.shift()
            result.push(currentVertex)
            this.adjacency[currentVertex].forEach(vertex => {
                if(!visited[vertex]){
                    queue.push(vertex)
                    visited[vertex]=true
                }
            });
        }
        return result
    }
}

const graph=new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "z");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
console.log(graph.bfs("A"));