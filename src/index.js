import { UnweightedGraph, WeightedGraph } from './graphs/utils'
import { BFS, DFS } from './graphs'
import { 
    pairWithSum,
    binaryArraySort,
    maximumLengthSubArray,
    largestConsecutiveSubSequence
} from './arrays'

//Arrays
console.log("Pair With Sum: ", pairWithSum([1,4,2,5,9,3,5,3], 10))
console.log("Binary Array Sort: ", binaryArraySort([1,1,1,0,0,0,0,1,0,1]))
console.log("Largest Sub Array: ", largestConsecutiveSubSequence([0, 2, 1, 2, 1, 3, 4]))
console.log("Maximum Length Sub Array", maximumLengthSubArray([0,6,-5,5,3,5,3,-2,0], 8))

//Graphs
const g = new UnweightedGraph()
g.addEdge(0, 1) 
g.addEdge(0, 2) 
g.addEdge(1, 2) 
g.addEdge(2, 0) 
g.addEdge(2, 3) 
g.addEdge(3, 3)
console.log(BFS(g.graph, 2))
console.log(DFS(g.graph, 2))

const weightedG = new WeightedGraph()
weightedG.addEdge(0, 1, 3)
weightedG.addEdge(0, 2, 5)
weightedG.addEdge(1, 2, 4)
weightedG.addEdge(1, 4, 2),
weightedG.addEdge(2, 3, 1)
weightedG.addEdge(2, 0, 9)
weightedG.addEdge(3, 0, 2)
weightedG.addEdge(4, 1, 3)