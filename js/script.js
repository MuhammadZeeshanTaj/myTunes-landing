$(function(){
    $(window).on('scroll', function(){
        var pos = $(this).scrollTop();

        $('#showcase-content').css({
            'transform': 'translateY('+ pos/4 +'%)'
        });
    });

    $('#navbar a').on('click', function(){
        var hash = this.hash;
        console.log(hash);
        var pos = $(hash).position().top;
        console.log(pos);
        $('html, body').animate({
            scrollTop: pos,
        }, 'slow', 'swing');
    })
});