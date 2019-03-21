"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortPathToGivenGoals = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var shortPathToGivenGoals = function shortPathToGivenGoals(board, startX, startY) {
  var height = board.length;
  var width = board[0].length;
  var shortestPaths = {};

  var isValid = function isValid(x, y) {
    return y < height && y >= 0 && x < width && x >= 0;
  };

  var isSafe = function isSafe(visited, x, y) {
    return board[y][x] && !visited[y][x];
  };

  var findPath = function findPath(x, y, visited, paths) {
    if (board[y][x] === 3 && !visited[y][x]) {
      console.log("GOALL: ", {
        x: x,
        y: y
      });
      visited[y][x] = 3;
      shortestPaths["goal".concat(x, ",").concat(y)] = paths;
      return;
    }

    visited[y][x] = 1;
    console.log(visited);

    if (isValid(x + 1, y) && isSafe(visited, x + 1, y)) {
      var newPath = [].concat(_toConsumableArray(paths), ["RIGHT"]);
      findPath(x + 1, y, visited, newPath);
    }

    if (isValid(x, y + 1) && isSafe(visited, x, y + 1)) {
      var _newPath = [].concat(_toConsumableArray(paths), ["DOWN"]);

      console.log("Valid to Go Down", {
        x: x,
        y: y
      });
      findPath(x, y + 1, visited, _newPath);
    }

    if (isValid(x - 1, y) && isSafe(visited, x - 1, y)) {
      var _newPath2 = [].concat(_toConsumableArray(paths), ["LEFT"]);

      findPath(x - 1, y, visited, _newPath2);
    }

    if (isValid(x, y - 1) && isSafe(visited, x, y - 1)) {
      var _newPath3 = [].concat(_toConsumableArray(paths), ["UP"]);

      findPath(x, y - 1, visited, _newPath3);
    }

    visited[y][x] = 0;
  };

  var visited = _toConsumableArray(Array(height)).map(function (_) {
    return Array(width).fill(0);
  });

  findPath(startX, startY, visited, []);
  console.log(shortestPaths);
};

exports.shortPathToGivenGoals = shortPathToGivenGoals;