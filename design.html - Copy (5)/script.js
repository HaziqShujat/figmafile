$(document).ready(function() {
    // hide all content except the first tab
    $('.content').not(':first').hide();
  
    // add event listeners to each tab
    $('.tab').click(function() {
      // hide all content
      $('.content').hide();
      
      // show the content corresponding to the clicked tab
      $('#' + $(this).attr('id') + '-content').show();
    });
  });
  