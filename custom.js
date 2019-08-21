
$(function(){
    $('.blink').typed({
        strings: ['I am a Web Developer', 'I am a Web Designer'],
        speed: -100, loop: true, callback: function(){
            $('.typed-cursor').hide();
        }
    })
})
$(function(){
    $('.blinktwo').typed({
        strings: ['I am Mujtahid Furqaan Siddiqui'],
        speed : -20, loop : false,
        callback: function(){
            $('.typed-cursor').hide();
        }
    })
})

