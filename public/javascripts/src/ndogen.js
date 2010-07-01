var ndogen = $.sammy(function() {
  var app = this;
  this.use(Sammy.Mustache);
  this.use(Sammy.JSON);

  // Root - Display Projects
  //-----------------------------------------------------------------------------

  this.get('', function(ctx) {
    // TODO: make dynamic
    $.getJSON('/documents/1', function(doc) {
      app.doc = new Doc(doc);
      $('#content').html(app.doc.render());
      
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