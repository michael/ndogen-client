//-----------------------------------------------------------------------------
// Link
//-----------------------------------------------------------------------------

var Link = function (node) {
  DocNode.call(this, node);
  if (node.properties) {
    this.alias = node.properties.alias;
  }
};

Link.prototype = Object.extend(DocNode);

Link.prototype.render = function () {
  var str = "<a href="+this.val+">"+this.alias+"</a> ";
  return str;
};