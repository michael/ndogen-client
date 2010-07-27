var ndogen = $.sammy(function() {
  var app = this;
  this.use(Sammy.Mustache);
  this.use(Sammy.JSON);


  // List Documents
  //-----------------------------------------------------------------------------

  this.get('', function(ctx) {
    $.getJSON('/documents', function(documents) {
      var html = '<h1>Available Documents</h1><div class="documents">'
      _.each(documents, function(doc, key) {
        html += '<div class="document"> \
                   <h5><a href="/#/'+key+'">'+doc.name+'</a></h5> \
                   <div class="descr">'+doc.descr+'</div> \
                   <div class="meta">X sections, Y words</div> \
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
      hijs('code');
      
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
    
  // $('#navigation').mouseover(function() {
  //   $('#toc').fadeIn('fast');
  //   // $('#toc').show();
  // });
  // 
  // $('#content').mouseover(function() {
  //   $('#toc').fadeOut('fast');
  //   // $('#toc').hide();
  // });
  
});