$(document).ready(function(){
    setTimeout(() => $('.social-button').css('visibility', 'visible'), 1500);

    $('.news .card a').click(event => event.preventDefault());
    $('.advices .card-outer:not(:first-child) a').click(event => event.preventDefault());

    $('#bars').click(function() {
        $(this).toggleClass('focused');
        $('#nav').toggle();
    });

    $('.news .section-menu a').click(function(event) {
        event.preventDefault();
        $('.news .card-outer').hide();
        $('.news .card-outer').filter('.' + $(this).attr('id')).fadeIn();
    })

    $('.advices .section-menu a').click(function(event) {
        event.preventDefault();
        $('.advices .card-outer').hide();
        $('.advices .card-outer').filter('.' + $(this).attr('id')).fadeIn();
    })

    $('footer .to-top img').click(() => {
        $("html, body").animate( 
            { scrollTop: "0" }, 2000); 
    })  
});