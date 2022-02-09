
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


    let i = 0;
    function sliderAuto() {

        if (i >= 6){
            i=0;
        }
        i++;

        if($(window).width() < 900){
            if(i == 1 | i == 3 | i == 5){
                $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero'+i+'.webp")', 'opacity':'100%'},2000).transit({'background-position':'-100px'}, 7000);
            } 
            if(i == 2 | i == 4 | i == 6){
                $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero'+i+'.webp")', 'opacity':'100%'},2000).transit({'background-position':'-50px'}, 7000);
            }
        }
        if ($(window).width() >= 900){
            if (i == 1 | i == 3 | i == 5) {
                $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero'+i+'lg.webp")', 'opacity':'100%'},2000).transit({'background-position':'-100px'}, 7000);
            }
            if (i == 2 | i == 4 | i == 6) {
                $('.hero').transit({'opacity':'50%','background-image':'url("img/hero/hero'+i+'lg.webp")', 'opacity':'100%'},2000).transit({'background-position':'-50px'}, 7000);
            } 
        }
    }

sliderAuto();

setInterval(function(){
        sliderAuto();
},9000)


$('article').on('mouseenter', function(){
    current=$(this);
    current.stop().transit({'background-size':'150%'}, 300);
    current.find('.overlay').stop().transit({'background':'rgba(42, 39, 64, 0.8)'}, 300);
    current.find('h4').transit({'opacity':'100%'},300);
    current.find('h4').parent().transit({'border':'2px solid aliceblue'},300);
});
$('article').on('mouseleave', function(){
    current=$(this);
    current.stop().transit({'background-size':'100%'}, 300);
    current.find('.overlay').stop().transit({'background':'transparent'}, 200)
    current.find('h4').transit({'opacity':'0'},300);
    current.find('h4').parent().transit({'border':'2px solid transparent'},300);
});