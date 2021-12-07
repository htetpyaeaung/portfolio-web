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
}

function closeProjectInfo(){
    document.getElementById("myProjects").style.width="0%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//get id from divs that user clicks
$("#projects div").click(function(e){
    alert($(this).attr("id"));
    return false;
});

$(".tagHolder div").click(function(f){
    alert($(this).parent().parent().attr("id"));
    return false;
});