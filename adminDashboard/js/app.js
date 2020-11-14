$('.show-sidebar-btn').click(function(){
    $('.aside').animate({marginLeft:0});
});

$('.hide-sidebar-btn').click(function(){
    $('.aside').animate({marginLeft:"-100%"});
});


function go(url){
    location.href=`${url}`;
}


$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.full-screen-btn').click(function(){
    $('.data-table-card').toggleClass('full-screen-card');
    $('.header').toggleClass('hide-header');
   $('.feather-maximize-2').toggleClass('feather-minimize-2');
})

$(document).ready(function() {
    $('#dataTable').DataTable();
} );

let screenHeight=$(window).height();
let currentMenuHeight=$('.nav-menu .cus_active').offset().top;

if(currentMenuHeight > screenHeight){
    $('.aside').animate(
        {
            scrollTop:currentMenuHeight
        },3000
    )
}