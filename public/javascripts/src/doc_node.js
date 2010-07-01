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

// Factory method that instantiates the corrent node object
DocNode.create = function(node) {
  var result;
  switch (node.type) {
    case 'Section': result = new Section(node); break;
    case 'Topic': result = new Topic(node); break;
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