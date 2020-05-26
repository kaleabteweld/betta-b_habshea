var year = "2018";



function init() {

    //var list_conter = $("#download  #ed");
    var dropdown = $("#download  #ed #dropdownMenu1");
    var dropdown_item = $("#download  #ed .dropdown-menu");
    let temp = new Date;
    year = temp.getFullYear();

    let a = range(2018,Number(year)+1);

    
    for (let index =  a.length-1; index != -1; index--) {
        
        temp = $("<button class=\"dropown-item btn btn-primary\" id=\""+String(a[index])+"\">"+String(a[index])+"</button>");
        dropdown_item.append(temp);
        $(temp).click(function (e) {
            year = a[index]
            console.log(year);
        });
    }
}


$(function (){
   
    

    var dropdown = $("#download  #ed #dropdownMenu1");
    var dropdown_item = $("#download  #ed .dropdown-menu");
    $(dropdown).click(function (e) { 
        console.log("dropdown");
        $(dropdown_item).css("display", "block");
        
    });

    init();

    var list_conter = $("#download  #ed");
    var list = $("#download  #ed > button");
    var downlaod_but = $("#download  #get");

    downlaod_but.click(function (e) { 
        
        
        downlaod_but.load("/betta'b_habshea/downlaod.php", {year},function (response, status, request) {

            if(response != "error"){

                console.log(response);
                downlaod_but.attr("href", response);
                downlaod_but.text("downloading.......");
            }

            
            
        });


    });



    // log_up





});