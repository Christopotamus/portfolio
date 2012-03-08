/** the following was given to me by the djangobook online manual **/
// it can be found here: https://docs.djangoproject.com/en/dev/ref/contrib/csrf/#ajax
$(document).ajaxSend(function(event, xhr, settings) {
         function getCookie(name) {
               var cookieValue = null;
               if (document.cookie && document.cookie != '') {
                  var cookies = document.cookie.split(';');
                  for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                     }
                  }
               }
               return cookieValue;
         }
         function sameOrigin(url) {
            // url could be relative or scheme relative or absolute
            var host = document.location.host; // host + port
            var protocol = document.location.protocol;
            var sr_origin = '//' + host;
            var origin = protocol + sr_origin;
            // Allow absolute or scheme relative URLs to same origin
            return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
                   (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
                   // or any other URL that isn't scheme relative or absolute i.e relative.
                   !(/^(\/\/|http:|https:).*/.test(url));
         }
         function safeMethod(method) {
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
         }

         if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
});

/**end djangobook code**/

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

function sendEmail(form){
   $.ajax({
      type:'POST',
      url:'http://192.168.1.143:8000/hire/',
      data:$(form).serialize(),
      success:function(data){
         console.log(data);     
      }
   });
}
