"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largestConsecutiveSubArray = exports.binaryArraySort = exports.pairWithSum = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//utility
var XOR = function XOR(a, b) {
  return !a != !b;
}; //


var pairWithSum = function pairWithSum(array, sum) {
  var cache = {};
  var pairs = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          element = _step$value[1];

      if (cache[sum - element] != void 0) {
        pairs.push([cache[sum - element], index]);
      }

      cache[element] = index;
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

  return pairs;
};

exports.pairWithSum = pairWithSum;

var binaryArraySort = function binaryArraySort(array) {
  var zeroes = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var element = _step2.value;
      !element && (zeroes += 1);
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

  return Array(zeroes).fill(0).concat(Array(array.length - zeroes).fill(1));
};

exports.binaryArraySort = binaryArraySort;

var largestConsecutiveSubArray = function largestConsecutiveSubArray(array) {
  var cache = {};
  array.forEach(function (element) {
    var rightIndex = element + 1;
    var leftIndex = element - 1;

    if (!cache[element]) {
      var right = cache[rightIndex] || 0;
      var left = cache[leftIndex] || 0;
      var sum = left + right + 1;
      cache[element] = sum;
      var rightCursor = rightIndex;

      while (right) {
        right = cache[rightCursor] && (cache[rightCursor] = sum);
        rightCursor += 1;
      }

      var leftCursor = leftIndex;

      while (left) {
        left = cache[leftCursor] && (cache[leftCursor] = sum);
        leftCursor += 1;
      }
    }
  });
  return Object.values(cache).reduce(function (acc, curr) {
    return curr > acc ? curr : acc;
  }, 0);
};

exports.largestConsecutiveSubArray = largestConsecutiveSubArray;