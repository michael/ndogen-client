//-----------------------------------------------------------------------------
// Section
//-----------------------------------------------------------------------------

var Section = function (node) {
  DocNode.call(this, node);
  
  this.level = node.properties.level || 1;
  this.sectionId = Section.count += 1;
};

// internal section count
Section.count = 0;

Section.prototype = Object.extend(DocNode);

Section.prototype.render = function () {
  
  var str = '<h'+(this.level+1)+' id="section_'+this.sectionId+'">'+this.val+'</h'+(this.level+1)+'>';
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.render();
    });
  }
  
  return str;
};
