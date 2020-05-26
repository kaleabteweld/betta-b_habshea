var ok = {

    name:false,
    us_name:false,
    email:false,
    phon:false,
    password:false,

};

var name_;
var us_name_;
var email_;
var phon_;
var password_;


function button_enable(){
    let  post =  $("#bace #a #form  #post");
    if(ok.name && ok.us_name && ok.email && ok.phon && ok.password){
        // $(post).addClass("OK");
        post.removeAttr("disabled");
        
        post.click(function (e) { 
            
            
            post.load("/betta'b_habshea/signIn.php", {

                name_,
                us_name_,
                email_,
                phon_,
                password_
            },function (response, status, request) {

                if(response == "no"){
    
                    console.log(response);
                    $(post).html("Some Thing is Not Right, Plase Contict Us");
                    $(post).removeClass("btn btn-success");
                    $(post).addClass("btn btn-danger");
                    post.attr("disabled", "disabled");
                   

                }else{

                    let ok = $("#bace #a #ok");
                    let form = $("#bace #a #form");
                    let brea = $("#bace #a #break");
                    let othet = $("#bace #a #other");

                    
                    $(form).css("display", "none");
                    $(brea).css("display", "none");
                    $(othet).css("display", "none");
                    $(ok).css("display", " flex");

                    let name = $("#bace #a #ok > #name");
                    $(name).append("<p>"+name_+", @"+us_name_+"<P>");


                }
    
                
                
            });
            
        });
    }else{
        post.attr("disabled", "disabled");
    } 

}





$(function (){




    var name = $("#bace #a #form .form-group #name");

    var us_name = $("#bace #a #form .form-group #us_name");

    var email = $("#bace #a #form .form-group #email");

    var phon = $("#bace #a #form .form-group #phon");

    var password = $("#bace #a #form .form-group #pass");
    
    var post =  $("#bace #a #form #post");
    post.attr("disabled", "disabled");

    var temp = $("#bace #a #temp");
    
    
    name.keyup(function (e) { 
        
        name_ = name.val();
        
        if( (name_.length == 0) ){
            ok.name = false;
            button_enable();
            name.addClass("is-invalid");
            //name.attr("placeholder", "can not be empty");
        }else{
            

            ok.name = true;
            button_enable();
            name.removeClass("is-invalid");
            name.addClass("is-valid");
            

            //name.attr("placeholder", "The Name of the Event");

        }

        
    });

    us_name.keyup(function (e) { 
        
        us_name_ = us_name.val();
        
        if( (us_name_.length == 0) ){

            ok.us_name = false;
            button_enable();
            us_name.addClass("is-invalid");
            
            //us_name.attr("placeholder", "can not be empty");
        }else{
    
            //$(temp).load
            $.post("/betta'b_habshea/cheak.php", { type:"User_Name",need:us_name_ }, function (response, status, request) {
                
                    // console.log("response "+ response);
                    // console.log("data "+ response);
                    if(response == "1"){
        
                        // console.log("error "+y);
                        ok.us_name = false;
                        button_enable();
                        
                        us_name.addClass("is-invalid");
                        
                    }else if(response == "0"){
        
                        
                        // console.log("ok "+y);
                        ok.us_name = true;
                        button_enable();
                        us_name.removeClass("is-invalid");
                        us_name.addClass("is-valid");
        
        
                    }
                
            });
        }

        
    });

    email.keyup(function (e) { 
        
        email_ = email.val();

        // || ( (email_.indexOf("@") <= 5 && email_.indexOf(".") <= 10 ) &&  (email_.endsWith(".")))

        if( (email_.length == 0) || ( !(email_.includes("@"))  || !(email_.includes(".")) )  ){
            ok.email = false;
            button_enable();
            email.addClass("is-invalid");
            //email.attr("placeholder", "can not be empty");
        }else{
            

            $.post("/betta'b_habshea/cheak.php", { type:"Email",need:email_ }, function (response, status, request) {
                
                // console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "1"){
    
                    ok.email = false;
                    button_enable();
                    email.addClass("is-invalid");
                    
                }else if(response == "0"){
    
                    ok.email = true;
                    button_enable();
                    email.removeClass("is-invalid");
                    email.addClass("is-valid");
    
    
                }
            
            });

        }

        
    });

    phon.keyup(function (e) { 
        
        phon_ = phon.val();

        
        if( (phon_.length == 0) || ( phon_.startsWith("251") ? phon_.length == 12 ?  false : true  :  phon_.length == 10 ? false : true) ){

           // console.log("error "+phon_);
            ok.phon = false;
            button_enable();
            phon.addClass("is-invalid");
            //phon.attr("placeholder", "can not be empty");
        }else{
            
            if(phon_.startsWith("251")){
                phon_ = "+"+phon_;
            }
            else{
                phon_ = phon_.slice(1,phon_.length);
                phon_ = "+251"+phon_;
            }

            $.post("/betta'b_habshea/cheak.php", { type:"Phone",need:phon_ }, function (response, status, request) {
                
                // console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "1"){
    
                    ok.phon = false;
                    button_enable();
                    phon.addClass("is-invalid");
                    
                }else if(response == "0"){
    
                    ok.phon = true;
                    button_enable();
                    phon.removeClass("is-invalid");
                    phon.addClass("is-valid");
    
    
                }
            
            });

        }

        
    });

    password.keyup(function (e) { 
        
        password_ = password.val();
        if(password_.length == 0 || password_.length < 8){
            ok.password = false;
            button_enable();
            password.addClass("is-invalid");
            //password.attr("placeholder", "can not be empty");
        }else{
            
            ok.password = true;
            button_enable();
            password.removeClass("is-invalid");
            password.addClass("is-valid");
            

            //password.attr("placeholder", "The Name of the Event");

        }

        
    });



})