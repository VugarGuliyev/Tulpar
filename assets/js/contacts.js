$(document).ready(function(){
    setTimeout(() => $('.social-button').css('visibility', 'visible'), 1500);

    $('#bars').click(function() {
        $(this).toggleClass('focused');
        $('#nav').toggle();
    });

    $('footer .to-top img').click(() => {
        $("html, body").animate( 
            { scrollTop: "0" }, 2000); 
    })  
});