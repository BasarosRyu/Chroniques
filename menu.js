$(document).ready(function() {
  /* On surveille les cliques sur les liens du menu */
  $("#list li").click(function(e) {
    /* On désactive l'action par défaut des liens */
    e.preventDefault();

    $($(this).next('ul').children().toggleClass('displayLI'));
    $($(this).next('ul').children().toggleClass('displayDefault'));
  });


  $('.sub-ul li').click(function(e) {
    e.preventDefault();
    $('#chronique-container').empty();

    $('#chronique-container').load($(this).data("id") + ".html");
  })
});
