
$('#login').click(function(){
    var g = G$('John', 'Doe');
    var lang = $('#lang').val();
    g.setLang(lang).HTMLGreeting('#greeting', true).log();        
});
