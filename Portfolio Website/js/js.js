
$('.nav').on('click', function(){
    let button = $(this);
    if(button.hasClass('closed')){
        button.next().slideDown(700);
        button.transit({'background-color':'#99bdff', 'color':'aliceblue'},500)
        button.removeClass('closed').addClass('open');
    }
    else if(button.hasClass('open')){
        button.next().slideUp(700);
        button.transit({'background-color':'rgba(255, 255, 255, 0.438)', 'color':'#99bdff'},1500)
        button.removeClass('open').addClass('closed');
    }
    
});


console.log($(window).width)

function left(){
    $('.hero').transit({'background-position':'-50px'}, 7000);
}
function right(){
    $('.hero').transit({'background-position':'-100px'}, 7000);
};

    
    function sliderAuto() {
        if($(window).width() < 900){
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero2.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero3.webp")', 'opacity':'100%'},2000);
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero7.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero5.webp")', 'opacity':'100%'},2000);
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero6.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero1.webp")', 'opacity':'100%'},2000);
        } else if ($(window).width() >= 900) {
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero2lg.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero3lg.webp")', 'opacity':'100%'},2000);
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero7lg.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero5lg.webp")', 'opacity':'100%'},2000);
            right();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero6lg.webp")', 'opacity':'100%'},2000);
            left();

            $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero1lg.webp")', 'opacity':'100%'},2000);
        }

    }

sliderAuto();
setInterval(function(){
    if (document.hasFocus()){
    sliderAuto();
    }
},0)