var clickedLink = '';

$(function(){
      
   var currentPage = window.location.pathname.split("/")[1]+'\/'; 
   $(".main-nav-link#"+currentPage).addClass("active-link drop-shadow").append("<div class='arrow-down'></div>");

   $(".bottom-nav-link, .main-nav-link").click(function(){
      clickedLink = this.id;
      console.log($('html').scrollTop());
      if($(document).scrollTop() > 150)
         scrollAndNav(clickedLink);   
      else
         noScrollAndNav(clickedLink);
   });

   $(".main-contact-nav, .bottom-contact-nav").click(function(){
      anchorPos = $("#footer").offset().top;
      currentPage = "contact";
      $(".main-nav-link").removeClass("active-link drop-shadow");
      $(".arrow-down").remove();
      $(".main-contact-nav").addClass("active-link drop-shadow").append("<div class='arrow-down'></div>");
      $('html,body').animate({scrollTop:anchorPos}, 1500, 'easeInOutExpo');
   });
});

function needToChangePage(clickedPage){
   splitPath = window.location.pathname.split("/")[1];
   if(clickedPage != splitPath)
      return true;
   else
      return false;
}
function scrollAndNav(clickedLink){
      $('html,body').animate({scrollTop:0}, 1500, 'easeInOutExpo',function(){
         if(needToChangePage(clickedLink) == true){
            window.location.hash = '';
            window.location.pathname = clickedLink;
         }else{

            $(".main-contact-nav").removeClass("active-link drop-shadow");
            $(".arrow-down").remove();
            $(".main-nav-link#"+clickedLink).addClass("active-link drop-shadow").append("<div class='arrow-down'></div>");
         }
      });
}
function noScrollAndNav(clickedLink){
   if(needToChangePage(clickedLink) == true){
      window.location.hash = '';
      window.location.pathname = clickedLink;
   }else{

      $(".main-contact-nav").removeClass("active-link drop-shadow");
      $(".arrow-down").remove();
      $(".main-nav-link#"+clickedLink).addClass("active-link drop-shadow").append("<div class='arrow-down'></div>");
   }
}
