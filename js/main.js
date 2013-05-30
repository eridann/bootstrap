//Gestion de la navigation

$('nav a').on('click',function(e){
    e.preventDefault();
    $('#main').load($(this).attr('href'));

})
