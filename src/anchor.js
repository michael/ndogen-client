//-----------------------------------------------------------------------------
// Anchor
//-----------------------------------------------------------------------------

var Anchor = function (node) {
  DocNode.call(this, node);
};

Anchor.prototype = Object.extend(DocNode);

Anchor.prototype.render = function () {
  var str = "<h5>"+this.type+": "+this.val+"</h5><ul>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += "<li>"+node.render()+"</li>";
    });    
  }
  return str+"</ul>";
};