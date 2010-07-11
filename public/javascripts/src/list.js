//-----------------------------------------------------------------------------
// List
//-----------------------------------------------------------------------------

var List = function (node) {
  DocNode.call(this, node);
};

List.prototype = Object.extend(DocNode);

List.prototype.render = function () {
  var str = "<ul>";
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });
  }
  return str+"</ul>";
};