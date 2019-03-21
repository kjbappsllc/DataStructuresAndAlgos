"use strict";

var _utils = require("./graphs/utils");

var _graphs = require("./graphs");

var _arrays = require("./arrays");

var _backtracking = require("./backtracking");

//Arrays
console.log("Pair With Sum: ", (0, _arrays.pairWithSum)([1, 4, 2, 5, 9, 3, 5, 3], 10));
console.log("Binary Array Sort: ", (0, _arrays.binaryArraySort)([1, 1, 1, 0, 0, 0, 0, 1, 0, 1]));
console.log("Largest Sub Array: ", (0, _arrays.largestConsecutiveSubSequence)([0, 2, 1, 2, 1, 3, 4]));
console.log("Maximum Length Sub Array", (0, _arrays.maximumLengthSubArray)([0, 6, -5, 5, 3, 5, 3, -2, 0], 8)); //Graphs

var g = new _utils.UnweightedGraph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log((0, _graphs.BFS)(g.graph, 2));
console.log((0, _graphs.DFS)(g.graph, 2));
var weightedG = new _utils.WeightedGraph();
weightedG.addEdge(0, 1, 3);
weightedG.addEdge(0, 2, 5);
weightedG.addEdge(1, 2, 4);
weightedG.addEdge(1, 4, 2), weightedG.addEdge(2, 3, 1);
weightedG.addEdge(2, 0, 9);
weightedG.addEdge(3, 0, 2);
weightedG.addEdge(4, 1, 3);
var mockBoard = [[1, 1, 3, 1, 0, 1, 1], [1, 3, 0, 0, 1, 1, 1], [1, 1, 1, 1, 3, 1, 1], [1, 1, 1, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 3]];
(0, _backtracking.shortPathToGivenGoals)(mockBoard, 0, 0);