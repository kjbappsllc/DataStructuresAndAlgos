"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Rules, non modifier:
// Match, take prev diagonal.
// Does not match, make 0
//Rules, with Modifier:
// Match, take max between top and left
// Does not match, take top
var regex = function regex(s, p) {
  var MODIFIER = "*";

  var doesMatch = function doesMatch(c, p) {
    if (p === ".") {
      return 1;
    }

    if (c === p[0]) {
      return 1;
    }

    return 0;
  };

  var getTop = function getTop(stringMap, i, j) {
    return stringMap[i - 1] && stringMap[i - 1][j] || 0;
  };

  var getDiagonal = function getDiagonal(stringMap, i, j) {
    return stringMap[i - 1] && stringMap[i - 1][j - 1] || 0;
  };

  var getLeft = function getLeft(stringMap, i, j, isModified) {
    return stringMap[i][j - 1] != void 0 ? stringMap[i][j - 1] : isModified;
  };

  var hasModifier = function hasModifier(p) {
    return p[1] === MODIFIER;
  };

  var parseP = function parseP() {
    var charArr = [];

    for (var i = 0; i < p.length; i++) {
      var currChar = p[i];
      var nextChar = p[i + 1];

      if (nextChar === MODIFIER) {
        currChar += nextChar;
        i += 1;
      }

      charArr.push(currChar);
    }

    return charArr;
  };

  var patternArr = parseP();

  var stringMap = _toConsumableArray(Array(patternArr.length)).map(function (_) {
    return Array(s.length).fill(0);
  });

  for (var i = 0; i < stringMap.length; i++) {
    var isModified = hasModifier(patternArr[i]);

    for (var j = 0; j < stringMap[i].length; j++) {
      var matches = doesMatch(s[j], patternArr[i]);

      if (i === 0 && j === 0) {
        if (matches) stringMap[0][0] = 1;
        continue;
      }

      if (matches) {
        if (!isModified) {
          stringMap[i][j] = getDiagonal(stringMap, i, j);
        } else {
          var top = getTop(stringMap, i, j);
          var left = getLeft(stringMap, i, j, isModified);
          stringMap[i][j] = Math.max(top, left);
        }
      } else {
        if (!isModified) {
          stringMap[i][j] = 0;
        } else {
          stringMap[i][j] = getTop(stringMap, i, j);
        }
      }
    }
  }

  var len = stringMap.length - 1;
  var innerLen = stringMap[len].length - 1;
  return !!stringMap[len][innerLen];
};

exports.regex = regex;