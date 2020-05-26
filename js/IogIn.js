var ok = {

    email:false,
    password:false,

};

var email_;
var password_;

var temp = $("#bace #a #temp");


function button_enable(){

    let  post =  $("#bace #a #form  #post");
    let password = $("#bace #a #form .form-group #pass");

    if(ok.email && ok.password){
        post.removeAttr("disabled");
        post.click(function (e) { 
            
            $.post("/betta'b_habshea/cheak.php", { type:"password",need:password_ }, function (response, status, request) {
                
                // console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "0"){
    
                    ok.password = false;
                    button_enable();
                    password.addClass("is-invalid");
                    
                }else if(response == "1"){
    
                    ok.password = true;
                    button_enable();
                    password.removeClass("is-invalid");
                    password.addClass("is-valid");
    
    
                }
            
            });
            
        });
    }else{
        post.attr("disabled", "disabled");
    } 

}
function check_email(){

    return true;

}
function check_password(){
 
    return true;
}


$(function (){




    var email = $("#bace #a #form .form-group #email");

    var password = $("#bace #a #form .form-group #pass");
    
    var post =  $("#bace #a #form #post");
    post.attr("disabled", "disabled");

    var forpass = $("#bace #a #form #forpass");
    forpass.attr("disabled", "disabled");
    
    

    email.keyup(function (e) { 
        
        var forpass = $("#bace #a #form #forpass");
        email_ = email.val();
        
        if( (email_.length == 0) || ( !(email_.includes("@"))  || !(email_.includes(".")) ) ){
            console.log(email_);
            ok.email = false;
            button_enable();
            email.addClass("is-invalid");
            forpass.attr("disabled", "disabled");
            //email.attr("placeholder", "can not be empty");
        }else{

            forpass.removeAttr("disabled");
            
            $.post("/betta'b_habshea/cheak.php", { type:"Email",need:email_ }, function (response, status, request) {
                
                // console.log("response "+ response);
                // console.log("data "+ response);
                if(response == "0"){
    
                    ok.email = false;
                    button_enable();
                    email.addClass("is-invalid");
                    
                }else if(response == "1"){
    
                    ok.email = true;
                    button_enable();
                    email.removeClass("is-invalid");
                    email.addClass("is-valid");
    
                    $(temp).load("/betta'b_habshea/logIn.php");
    
                }
            
            });

        }

        
    });
    password.keyup(function (e) { 
        
        password_ = password.val();
        if(password_.length == 0 || password_.length < 8){
            ok.password = false;
            button_enable();
            // password.addClass("is-invalid");
            //password.attr("placeholder", "can not be empty");
        }else{
            
            if(!(check_password(password_))){
                ok.password = false;
                button_enable();
                // password.addClass("is-invalid");
            }
            else{
                ok.password = true;
                button_enable();
                // password.removeClass("is-invalid");
                // password.addClass("is-valid");
            }

            //password.attr("placeholder", "The Name of the Event");

        }

        
    });
    

})