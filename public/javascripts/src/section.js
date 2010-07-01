//-----------------------------------------------------------------------------
// Section
//-----------------------------------------------------------------------------

var Section = function (node) {
  DocNode.call(this, node);
  
  this.level = node.properties.level || 1;
};

Section.prototype = Object.extend(DocNode);

Section.prototype.render = function () {
  var str = "<h"+this.level+">"+this.val+"</h"+this.level+">";
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });
  }
  
  return str;
};