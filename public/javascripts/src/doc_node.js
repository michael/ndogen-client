//-----------------------------------------------------------------------------
// DocNode
//-----------------------------------------------------------------------------

var DocNode = function (node) {
  var that = this;
  
  Node.call(this, {value: node.value ? node.value : ""});
  this.type = node.type;
  
  // children
  if (node.children) {
    $.each(node.children, function(index, node) {
      var n = DocNode.create(node);
      if (n) {
        that.set('children', index, n);
      }
    });
  }
};

DocNode.prototype = Object.extend(Node);

DocNode.prototype.renderSection = function() {
  var str = '';
  
  if (this.type === 'Section' && this.level < 3) {
    // str = '<h'+this.level+'>'+this.val+'</h'+this.level+'>';
    // str = '<h'+this.level+'>'+this.val+'</h'+this.level+'>';
    // str
    str += '<li><a href="#section_'+this.sectionId+'">'+this.val+'<ol>';
  }
  
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.renderSection();
    });
  }
  
  if (this.type === 'Section' && this.level < 3) {
    str += '</ol></li>';
  }
  
  return str;
};

// Factory method that instantiates the current node object
DocNode.create = function(node) {
  var result;
  switch (node.type) {
    case 'Section': result = new Section(node); break;
    case 'Caption': result = new Caption(node); break;
    case 'List': result = new List(node); break;
    case 'ListItem': result = new ListItem(node); break;
    case 'Paragraph': result = new Paragraph(node); break;
    case 'Text': result = new Text(node); break;
    case 'Code': result = new Code(node); break;
    case 'Definition': result = new Definition(node); break;
    case 'Link': result = new Link(node); break;
    case 'Anchor': result = new Anchor(node); break;
    
    default: result = null; console.log('not found...'+node.type); break;
  }
  return result;
};