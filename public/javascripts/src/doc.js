//-----------------------------------------------------------------------------
// Doc
//-----------------------------------------------------------------------------

var Doc = function (doc) {
  var that = this;
  
  Node.call(this, {value: doc.value});
  this.type = doc.type;
  
  // children
  if (doc.children) {
    $.each(doc.children, function(index, node) {
      var n = DocNode.create(node);
      if (n) {
        that.set('children', index, n);
      }
    });
  }
};

Doc.prototype = Object.extend(Node);

Doc.prototype.renderSection = function() {
  var str = '<h4>Table of contents</h4><ul>';
  if (this.all('children')) {
    this.all('children').each(function(index, node) {
      str += node.renderSection();
    });
  }
  str += '</ul>';
  return str;
};

Doc.prototype.render = function () {
  var str = "";
  this.all('children').each(function(index, node) {
    str += node.render();
  });
  
  return str;
};