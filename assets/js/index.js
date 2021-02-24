let questionList = document.querySelector('.question-box ul');
let question = document.querySelector('.question-box li');
let questionName = question.firstElementChild.textContent;
let newQuestion;

let answerList = document.querySelector('.answer-box');
let answer = document.querySelector('.answer-box div');
let answerName = answer.firstElementChild.textContent;
let newAnswer;

for (let i = 2; i <= 8; i++) {
    newQuestion = question.cloneNode(true);
    newQuestion.firstElementChild.textContent = questionName.substring(0, 7) + i;
    newQuestion.firstElementChild.id = `question${i}`;
    questionList.append(newQuestion);

    newAnswer = answer.cloneNode(true);
    newAnswer.className = `question${i}`;
    newAnswer.firstElementChild.textContent = answerName.substring(0, 6) + i;
    answerList.append(newAnswer);
}


// JQUERY

$(document).ready(function(){
    setTimeout(() => $('.social-button').css('visibility', 'visible'), 1500);

    $('.news .card a').click(event => event.preventDefault());

    $('.main .mouse').click(() => {
        window.scroll({
            top: 788, 
            behavior: 'smooth'
          });
    })

    $('#bars').click(function() {
        $(this).toggleClass('focused');
        $('#nav').toggle();

        
    });

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : false,
        infobar: false,
        arrows: false,
        keyboard: false,
        buttons: [
            "fullScreen",
            "close"
          ]
    });

    $('.gallery .section-menu a').click(function(event) {
        event.preventDefault();
        $('.gallery .card').hide();
        $('.gallery .card').filter('.' + $(this).attr('id')).fadeIn();
    })

    $('.news .section-menu a').click(function(event) {
        event.preventDefault();
        $('.news .card-outer').hide();
        $('.news .card-outer').filter('.' + $(this).attr('id')).fadeIn();
    })

    $('.question-box .active').hide();
    $('.answer-box div:not(:first-child)').hide();

    $('.question-box a').click(function(event) {
        event.preventDefault();
        $('.question-box .active').hide();
        $(this).next().next().show();
        $('.answer-box div').hide();
        $('.answer-box div').filter('.' + $(this).attr('id')).fadeIn();
    });
    
    $('footer .to-top img').click(() => {
        $("html, body").animate( 
            { scrollTop: "0" }, 2000); 
    })

    
});