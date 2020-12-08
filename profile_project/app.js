$(document).ready(function(){
    let screenHeight = $(window).height();
    
    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        if( currentPosition >= screenHeight){
            $('.site-nav').addClass('site-nav-scroll');
        }else{
            $('.site-nav').removeClass('site-nav-scroll');
        }
    })
});

$('.navbar-toggler').click(function(){
    // let check = $('.navbar-collapse').hasClass('show');
    // console.log(check);

    

    $('.togglar-icon').toggleClass('feather-x');
})

$(window).load('load',function(){
    $('.web-loader').fadeOut(500,function(){
        $(this).remove();
    })
})