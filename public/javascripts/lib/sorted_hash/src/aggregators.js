//-----------------------------------------------------------------------------
// Aggregators
// Default aggregators that can operate on a SortedHash
//-----------------------------------------------------------------------------

var Aggregators = {};

Aggregators.SUM = function (values) {
  var result = 0;
  
  values.each(function(index, value) {
    result += value;
  });

  return result;
};

Aggregators.MIN = function (values) {
  var result = Infinity;
  values.each(function(index, value) {
    if (value < result) {
      result = value;
    }
  });
  return result;
};

Aggregators.MAX = function (values) {
  var result = -Infinity;
  values.each(function(index, value) {
    if (value > result) {
      result = value;
    }
  });
  return result;
};

Aggregators.AVG = function (values) {
  return Aggregators.SUM(values) / values.length;
};

Aggregators.COUNT = function (values) {
  return values.length;
};

