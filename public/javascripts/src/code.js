//-----------------------------------------------------------------------------
// Code
//-----------------------------------------------------------------------------

var Code = function (node) {
  DocNode.call(this, node);
};

Code.prototype = Object.extend(DocNode);

Code.prototype.render = function () {
  
  var str = "<pre><code>"+this.val+"</code></pre>";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });    
  }
  
  return str+"";
};