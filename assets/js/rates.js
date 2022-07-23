$(document).ready(function(){
    $('.türkiye').click(function(){
        $(".usa").removeClass("active");
        $(this).addClass("active");
        
    });
    $('.usa').click(function(){
        $(".türkiye").removeClass("active");
        $(this).addClass("active");
    });
    $('.branch').click(function(){
        $(".home").removeClass("focus");
        $(this).addClass("focus");
        
    });
    $('.home').click(function(){
        $(".branch").removeClass("focus");
        $(this).addClass("focus");
    });
    $('.branch').click(function(){
        $(".to-address").hide();
        $(".to-branch").fadeIn("slow");
    });
    $('.home').click(function(){
        $(".to-branch").hide();
        $(".to-address").fadeIn("slow");
    });
});