
export const BFS = (graph, start) => {
    const visited = Array(Object.keys(graph).length).fill(false)
    const queue = []
    queue.push(start)
    visited[start] = true
    while(queue.length !== 0) {
        const v = queue.pop()
        process.stdout.write(`${v} `)
        for(let ve of graph[v]) {
            if(!visited[ve]) {
                queue.push(ve)
                visited[ve] = true
            }
        }
    }
    return "-BFS"
}

export const DFS = (graph, start) => {
    const DFSAux = (v, visited) => {
        visited[v] = true
        process.stdout.write(`${v} `)
        for(let ve of graph[v]) {
            !visited[ve] && (DFSAux(ve, visited))
        }
    }
    const visited = Array(Object.keys(graph).length).fill(false)
    DFSAux(start, visited)
    return "-DFS"
}

export const Dijkstra = (graph, start) => {
    const visited = Array(Object.keys(graph).length).fill(false)
    const distances = {}
}