//-----------------------------------------------------------------------------
// Text
//-----------------------------------------------------------------------------

var Text = function (node) {
  DocNode.call(this, node);
};

Text.prototype = Object.extend(DocNode);

Text.prototype.render = function () {
  var str = ""+this.val+"";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += ""+node.render()+" ";
    });    
  }
  
  return str+"";
};