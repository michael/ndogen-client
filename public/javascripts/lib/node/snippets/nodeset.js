// NodeSet
// ------------------------------------------------------------------------
// 
// NodeSet constructor
// 
// Used to conveniently wrap a set of nodes
// Parameters:
//   * nodes [Object] The object that holds the nodes
var NodeSet = function (nodes) {
  this.nodes = nodes || [];
  this.length = nodes.length;
};

// Iterate over nodes contained in the NodeSet
// Parameters:
//   * [Function] 
NodeSet.prototype.each = function (f) {
  var that = this;
  
  $.each(this.nodes, function(index, node) {
    f.call(that, index, node);
  });
};

// Map the NodeSet to your needs
// Parameters:
//   * [Function] 
NodeSet.prototype.map = function (f) {
  var that = this;
  return $.map(this.nodes, function(node) {
    return f.call(that, node);
  });
};

// Select items that match some conditions expressed by a matcher function
// Parameters:
//   * [Function] matcher function
NodeSet.prototype.select = function (f) {
  var that = this;
  
  return $.map(this.nodes, function(node) {
    if (f.call(that, node))
      return node;
    else
      return null;
  });
};

// Performs an intersection with the given NodeSet
// Parameters:
//   * nodeSet [NodeSet]
NodeSet.prototype.intersect = function(nodeSet) {
  var that = this;
  
  result = [];
  $.each(this.nodes, function(index, node) {
    $.each(nodeSet.nodes, function(index, node2){
      if (node === node2)
        result.push(node);
    });
  });
  return new NodeSet(result);
};

// Performs a sort on the NodeSet
// Parameters:
//   * comparator [Function] A comparator function
// Returns:
//   * The now sorted NodeSet (for chaining)
NodeSet.prototype.sort = function (comparator) {
  this.nodes.sort(comparator);
  return this;
};



// Get many Nodes (wrapped in a NodeSet)
// 
// Returns:
//   => [NodeSet] A NodeSet containing the assigned nodes
// Node.prototype.list = function(property, key) {
//   if (key !== undefined) {
//     return new NodeSet([this._properties[property][key]]);
//   } else {
//     var list = [];
//     $.each(this._properties[property], function(key, node) {
//       list.push(node);
//     });
//     return new NodeSet(list);
//   }
// };