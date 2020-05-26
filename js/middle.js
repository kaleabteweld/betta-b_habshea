$(function (){


    var back = $('.container-fluid .row .col-md-5 #main_back');
    var frot = $('.container-fluid .row .col-md-5 #main');
    var butten = $('.container-fluid .row .col-md-5  #next');


    frot.hide(0);

    butten.click(function (e) { 


        
         frot.show(500);
         back.slideDown(500,function (){
             back.hide(0);
             $(butten).hide(0);
         });
        // back.fadeOut(200);
        // 
        // frot.animate({
        //     height:"+=50vh"
        // },500,function (){

        // });
        
        
    });


});