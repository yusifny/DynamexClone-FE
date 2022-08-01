$(document).ready(function () {
    $('.chev, .main').click(function(){
        $('.chev').toggleClass('chev-active');
        $('.options').toggleClass('show-options');
    });
    
    $("#op-news").click(function(){
        selectOption(this);
    });

    $("#op-bulletin").click(function(){
        selectOption(this);
    });

    $("#op-blogs").click(function(){
        selectOption(this);
    });
    
    function selectOption(option){
        $('.chev').toggleClass('chev-active');
        $('.options').toggleClass('show-options');
        $(option).toggleClass("op-selected");
        $(option).siblings().removeClass("op-selected");
        $(option).parent().siblings('.main').text(option.text);
    }
});