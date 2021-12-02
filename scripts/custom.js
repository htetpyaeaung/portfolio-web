if($(window).width()>900){
    $("nav").removeClass("overlay");
    $("#navbarContent").removeClass("overlay-content");
    $("span").remove();

}else{
    $("nav").remove();
};



function openNav() {
    document.getElementById(
        "myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById(
        "myNav").style.width = "0%";
}