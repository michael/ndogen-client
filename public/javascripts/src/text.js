//-----------------------------------------------------------------------------
// Text
//-----------------------------------------------------------------------------

var Text = function (node) {
  DocNode.call(this, node);
  
  if (node.properties) {
    this.emph = node.properties.emph;
    this.strong = node.properties.strong;
  }
};

Text.prototype = Object.extend(DocNode);

Text.prototype.render = function () {
  var str = "";
  
  if (this.emph) {
    str += "<em>";
  } else if (this.strong) {
    str += "<strong>";
  }
  
  str += this.val;
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += ""+node.render()+" ";
    });    
  }
  
  if (this.emph) {
    str += "</em>";
  } else if (this.strong) {
    str += "</strong>";
  }
  
  return str;
};