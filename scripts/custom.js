

if($(window).width()>900){
    $("nav").removeClass("overlay");
    $("#navbarContent").removeClass("overlay-content");
    $(".burger-menu").remove();

}else{
    $("nav").remove();
};

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    
}

function openProjectInfo(){
    document.getElementById("myProjects").style.width="100%";
    $("#emailbtn").hide();
}

function closeProjectInfo(){
    document.getElementById("myProjects").style.width="0%";
    $("#emailbtn").show();
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var currentYear = new Date().getFullYear();
document.getElementById("updateYear").innerHTML = currentYear;

let mainValue;
let tagValue;

//get id from divs that user clicks
$("#projects div").click(function(e){
    mainValue = $(this).attr("id");
    if(mainValue !== undefined){
        jsonGet(mainValue);
        mainValue="";
    }else{
        jsonGet(tagValue);
    }
    return false;
});

$(".tagHolder div").click(function(f){
    tagValue = $(this).parent().parent().attr("id");
    if(tagValue !== undefined){
        jsonGet(tagValue);
    }
    
    return false;
});   


//get data from json file and add to individual project section tag
function jsonGet(clickValue){
    $.getJSON("project-data.json", function(data){
        if(clickValue === undefined){
            document.getElementById("p-heading").innerHTML=data[0].ProjectTitle;
            document.getElementById("p-desc").innerHTML=data[0].Description;
            document.getElementById("p-tech").innerHTML=data[0].Technologies;
            document.getElementById("p-image").src = data[0].ProjectImage;
        }
        else{
            document.getElementById("p-heading").innerHTML=data[parseInt(clickValue.substring(1))-1].ProjectTitle;
            document.getElementById("p-desc").innerHTML=data[parseInt(clickValue.substring(1))-1].Description;
            document.getElementById("p-tech").innerHTML=data[parseInt(clickValue.substring(1))-1].Technologies;
            document.getElementById("p-image").src = data[parseInt(clickValue.substring(1))-1].ProjectImage;
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

