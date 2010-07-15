//-----------------------------------------------------------------------------
// TextBlock
//-----------------------------------------------------------------------------

var TextBlock = function (node) {
  DocNode.call(this, node);
};

TextBlock.prototype = Object.extend(DocNode);

TextBlock.prototype.render = function () {
  var str = "";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });    
  }
  
  return str;
};