var ndogen = $.sammy(function() {
  var app = this;
  this.use(Sammy.Mustache);
  this.use(Sammy.JSON);

  // this.before(function() {
  //   // load the items
  //   var context = this;
  //   $.ajax({
  //     url: 'templates.json', 
  //     dataType: 'json',
  //     async: false,
  //     success: function(templates) {
  //       app.templates = templates;
  //     }
  //   });
  // });

  // List Documents
  //-----------------------------------------------------------------------------

  this.get('', function(ctx) {
    $.getJSON('/documents', function(documents) {
      var html = '<h1>Available Documents</h1><div class="documents">'
      _.each(documents, function(doc, key) {
        html += '<div class="document"> \
                   <h5><a href="/#/'+key+'">'+doc.name+'</a></h5> \
                   <div class="descr">'+doc.descr+'</div> \
                   <div class="meta">12 sections, 270 words</div> \
                 </div>';
      });
      html += '</div>';
      $('#content').html(html);
    });
  });
  
  // View Document
  //-----------------------------------------------------------------------------
  
  this.get('#/:document', function(ctx) {
    var did = this.params['document'];
    $.getJSON('/documents/'+did, function(doc) {
      app.doc = new Doc(doc);
      $('#content').html(app.doc.render());
      document.title = did;
      
      $('#toc').html(app.doc.renderSection());
      
    });
  });
  
  //-----------------------------------------------------------------------------
  // Event handlers
  //-----------------------------------------------------------------------------

  $(document).bind('keydown', 'alt+c', function() {
    $('#hud').fadeIn('fast', function() { });
    return false;
  });
  
  $(document).bind('keydown', 'esc', function() {
    $('#hud').fadeOut('fast', function() { });
    return false;
  });
});

$(function() {
  ndogen.run();
});