var ok = {

    event_name:false,
    event_Date:false,
    event_time_start:false,
    event_time_end:false,
    event_loc:false,
};

var name;
var Dataa;
var init_time;
var end_time;
var loc;
var info;

function button_enable(){
    let post =  $(".col-12 #conter #form #post");
    if(ok.event_name && ok.event_Date && ok.event_time_start && ok.event_time_end && ok.event_loc){
        post.removeAttr("disabled");
        post.click(function (e) { 
            
            post.load("/betta'b_habshea/TEMP/new_event.php", {
                name,
                Dataa,
                init_time,
                end_time,
                loc,
                info,

            });
            
        });
    }else{
        post.attr("disabled", "disabled");
    } 

}

$(function (){




    var event_name = $(".col-12 #conter #form .form-group #event_name");

    var event_Date = $(".col-12 #conter #form .form-group #event_Date");

    var event_time_start = $(".col-12 #conter #form #T .form-group #event_time_start");

    var event_time_end = $(".col-12 #conter #form #T .form-group #event_time_end");

    var event_loc = $(".col-12 #conter #form .form-group #event_loc");

    var event_info = $(".col-12 #conter #form .form-group #event_info");

    
    var post =  $(".col-12 #conter #form #post");

    post.attr("disabled", "disabled");
    
    

    event_name.blur(function (e) { 
        
        name = event_name.val();
        if(name.length == 0){
            ok.event_name = false;
            button_enable();
            event_name.addClass("error");
            event_name.attr("placeholder", "can not be empty");
        }else{
            ok.event_name = true;
            button_enable();
            event_name.removeClass("error");
            event_name.attr("placeholder", "The Name of the Event");

        }

        
    });
    event_Date.blur(function (e) { 
        
        Dataa = event_Date.val();
        if(Dataa.length == 0){
            ok.event_Date = false;
            button_enable();
            event_Date.addClass("error");
            event_Date.attr("placeholder", "can not be empty");
        }else{
            ok.event_Date = true;
            button_enable();
            event_Date.removeClass("error");

            let year = Dataa.slice(0,Dataa.indexOf("-"));
            let temp = Dataa.replace("-","/");
            let moth = Dataa.slice((Dataa.indexOf("-")+1),temp.indexOf("-"));
            let day = Dataa.slice((temp.indexOf("-")+1),Dataa.length);

            Dataa = day+"/"+moth+"/"+year;

            console.log(Dataa);

        }

        
    });
    event_time_start.blur(function (e) { 
        
        
        init_time = event_time_start.val();
        if(init_time.length == 0){
            ok.event_time_start = false;
            button_enable();
            event_time_start.addClass("error");
            event_time_start.attr("placeholder", "can not be empty");
        }else{
            ok.event_time_start = true;
            button_enable();
            event_time_start.removeClass("error");
            

        }

        
    });
    event_time_end.blur(function (e) { 
        
        end_time = event_time_end.val();
        if(end_time.length == 0){
            ok.event_time_end = false;
            button_enable();
            event_time_end.addClass("error");
            event_time_end.attr("placeholder", "can not be empty");
        }else{
            ok.event_time_end = true;
            button_enable();
            event_time_end.removeClass("error");
            event_time_end.attr("placeholder", "The Name of the Event");

        }

        
    });
    event_loc.blur(function (e) { 
        
        loc = event_loc.val();
        if(loc.length == 0){
            ok.event_loc = false;
            button_enable();
            event_loc.addClass("error");
            event_loc.attr("placeholder", "can not be empty");
        }else{
            ok.event_loc = true;
            button_enable();
            event_loc.removeClass("error");
            event_loc.attr("placeholder", "The Name of the Event");

        }

        
    });
    event_info.blur(function (e) { 
        
        info = event_info.val();       
    });



});