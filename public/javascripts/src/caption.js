//-----------------------------------------------------------------------------
// Caption
//-----------------------------------------------------------------------------

var Caption = function (node) {
  DocNode.call(this, node);
};

Caption.prototype = Object.extend(DocNode);

Caption.prototype.render = function () {
  var str = "<h5>"+this.val+"</h5>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });
  }
  
  return str;
};