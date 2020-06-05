$(function(){
    var click_num = 0;
    $('#btn').on('click', function(){
        click_num++;
        console.log(click_num % 2);
        if(click_num % 2 == 0){
            $('#menu').css('top', '0')
        }
        else if(click_num % 2 == 1){
            $('#menu').css('top', '110px')
        };
    });
});