class Graph {
  constructor() {
    this.adjacency = {};
  }
  addVertex(Vertex) {
    if (!this.adjacency[Vertex]) {
      this.adjacency[Vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacency[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacency[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacency[vertex1].add(vertex2);
    this.adjacency[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (

        this.adjacency[vertex1].has(vertex2) &&
        this.adjacency[vertex2].has(vertex1)
    )
    
  }
  display() {
    for (const key in this.adjacency) {
      console.log(key + " ->" + [...this.adjacency[key]]);
    }
  }
  
  removeEdge(vertex1,vertex2){    this.adjacency[vertex1].delete(vertex2)
    this.adjacency[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjacency[vertex]){
        return 
    }
    for (const adjacencyVertex of this.adjacency[vertex]) {
        console.log(adjacencyVertex);
        this.removeEdge(vertex,adjacencyVertex)
    }
    delete this.adjacency[vertex]
  }  // BFS Implementation
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        for (const neighbor of this.adjacency[vertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  // DFS Implementation
  dfs(startVertex) {
    const visited = new Set();

    const dfsUtil = (vertex) => {
      visited.add(vertex);
      console.log(vertex)
      for (const neighbor of this.adjacency[vertex]) {
        if (!visited.has(neighbor)) {
          dfsUtil(neighbor);
        }
      }
    };

    dfsUtil(startVertex);
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph.adjacency);
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.adjacency);
graph.display();
console.log("Has edge A-C: ", graph.hasEdge("A", "C"));

console.log("BFS:");
graph.bfs("A");

console.log("DFS:");
graph.dfs("A");

console.log("Removing edge A-B");
graph.removeEdge("A", "B");
graph.display();

console.log("Removing vertex C");
graph.removeVertex("C");
graph.display();


