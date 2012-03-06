$(function(){
      
var currentPage = window.location.pathname.split("/")[1]+'\/'; 
   $(".main-nav-link#"+currentPage).addClass("active-link drop-shadow").append("<div class='arrow-down'></div>");

   $(".bottom-nav-link, .main-nav-link").click(function(){
      //console.log(this.id.toString().substring(0,idLen -1));
      //$(".main-nav-link, #"+
      window.location.hash = '';
      window.location.pathname = this.id;
   });
});
