$(function(){
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing-txt > ul > li").length;

    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
    typingTxt = typingTxt.split(""); 
    if(typingBool == false){
    typingBool = true; 
    var tyInt = setInterval(typing,100);
    } 

    function typing(){ 
    if(typingIdx < typingTxt.length){ 
    $(".typing").append(typingTxt[typingIdx]); 
    typingIdx++; 
    } else{
    if(liIndex >= liLength - 1){
    liIndex = 0;
    }else{
    liIndex++; 
    }

    typingIdx=0;
    typingBool = false; 
    typingTxt = $(".typing-txt > ul > li").eq(liIndex).text(); 

    clearInterval(tyInt);
    setTimeout(function(){
    $(".typing").html('');
    tyInt = setInterval(typing,100);
    },1000);
    } 
    } 
    $('#work_menu li a').on('click', function(){
        var name = $(this).attr('href');
        var time = 200;
        console.log(name);
        $('#work_menu li a').css('fontWeight', 'normal');
        $('#work_menu li').css('background', 'none');

        $(this).css('fontWeight', 'bold');
        $(this).parent('li').css('background', '#E6C005');
        if(name !== 'all'){
            $('.row .col a').hide(time);
            $('.row .col .' + name).show(time);
            $('#work_menu li a [name = ' + name + ']').css('fontWeight', 'bold');
        }
        else{
            $('.row .col a').show(time);
        }
        return false;
    });
    $('.move_about').on('click', function(){
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    });
    
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        console.log(height);
        if(height > 400 && height < 1400){
            $(".circle:nth-child(1) svg circle:nth-child(2)").css('strokeDashoffset', 'calc(440 - (440 * 65) / 100)');
            $(".circle:nth-child(2) svg circle:nth-child(2)").css('strokeDashoffset', 'calc(440 - (440 * 70) / 100)');
            $(".circle:nth-child(3) svg circle:nth-child(2)").css('strokeDashoffset', 'calc(440 - (440 * 75) / 100)');
        }
        else{
            $(".circle:nth-child(1) svg circle:nth-child(2)").css('strokeDashoffset', '440')
            $(".circle:nth-child(2) svg circle:nth-child(2)").css('strokeDashoffset', '440')
            $(".circle:nth-child(3) svg circle:nth-child(2)").css('strokeDashoffset', '440')
        }
    });
    $('a').on('click', function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});