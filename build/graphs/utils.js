"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeightedGraph = exports.UnweightedGraph = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//////////
//I understand the duplication. Strictly for learning purposes
//////////
//Class represents a directed unweighted graph
var UnweightedGraph =
/*#__PURE__*/
function () {
  function UnweightedGraph() {
    _classCallCheck(this, UnweightedGraph);

    this.graph = {};
  }

  _createClass(UnweightedGraph, [{
    key: "addEdge",
    value: function addEdge(u, v) {
      this.graph[u] || (this.graph[u] = []);
      this.graph[u].push(v);
    }
  }]);

  return UnweightedGraph;
}(); //Class represents a directed weighted graph


exports.UnweightedGraph = UnweightedGraph;

var WeightedGraph =
/*#__PURE__*/
function () {
  function WeightedGraph() {
    _classCallCheck(this, WeightedGraph);

    this.graph = {};
  }

  _createClass(WeightedGraph, [{
    key: "addEdge",
    value: function addEdge(u, v, w) {
      this.graph[u] || (this.graph[u] = []);
      this.graph[u].push([v, w]);
    }
  }]);

  return WeightedGraph;
}();

exports.WeightedGraph = WeightedGraph;