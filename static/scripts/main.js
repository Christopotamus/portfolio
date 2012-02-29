$(function(){
    $(".bottom-nav-link, .main-nav-link").click(function(){
        window.location.href = this.id;
    });
});
