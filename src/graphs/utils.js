//////////
//I understand the duplication. Strictly for learning purposes
//////////

//Class represents a directed unweighted graph
export class UnweightedGraph {
    constructor() {
        this.graph = {}
    }
    addEdge(u,v) {
        (this.graph[u] || (this.graph[u] = []))
        this.graph[u].push(v)
    }
}

//Class represents a directed weighted graph
export class WeightedGraph {
    constructor() {
        this.graph = {}
    }
    addEdge(u,v,w) {
        (this.graph[u] || (this.graph[u] = []))
        this.graph[u].push([v, w])
    }
}