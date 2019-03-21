"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DFS = exports.BFS = void 0;

var BFS = function BFS(graph, start) {
  var visited = Array(Object.keys(graph).length).fill(false);
  var queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length !== 0) {
    var v = queue.pop();
    process.stdout.write("".concat(v, " "));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = graph[v][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var ve = _step.value;

        if (!visited[ve]) {
          queue.push(ve);
          visited[ve] = true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return "-BFS";
};

exports.BFS = BFS;

var DFS = function DFS(graph, start) {
  var DFSAux = function DFSAux(v, visited) {
    visited[v] = true;
    process.stdout.write("".concat(v, " "));
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = graph[v][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var ve = _step2.value;
        !visited[ve] && DFSAux(ve, visited);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var visited = Array(Object.keys(graph).length).fill(false);
  DFSAux(start, visited);
  return "-DFS";
};

exports.DFS = DFS;