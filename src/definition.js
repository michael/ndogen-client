//-----------------------------------------------------------------------------
// Definition
//-----------------------------------------------------------------------------

var Definition = function (node) {
  DocNode.call(this, node);
};

Definition.prototype = Object.extend(DocNode);

Definition.prototype.render = function () {
  var str = "<h5>"+this.type+": "+this.val+"</h5><ul>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += "<li>"+node.render()+"</li>";
    });    
  }
  return str+"</ul>";
};