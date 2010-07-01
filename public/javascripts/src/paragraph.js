//-----------------------------------------------------------------------------
// Paragraph
//-----------------------------------------------------------------------------

var Paragraph = function (node) {
  var that = this;
  DocNode.call(this, node);
};

Paragraph.prototype = Object.extend(DocNode);

Paragraph.prototype.render = function () {
  var str = "<p>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += ""+node.render()+"";
    });    
  }
  
  return str+"</p>";
};