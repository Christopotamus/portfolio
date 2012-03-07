var currentResumeSection = (window.location.hash.length > 0) ? window.location.hash.split("#")[1] : "objective";
var topID = '';

$(function(){
    $(".resume-section-head#"+currentResumeSection).addClass("active-resume-head drop-shadow");
    $(".resume-section-head").click(function(){
        $(".resume-section-head").removeClass("active-resume-head drop-shadow");
        $(this).addClass("active-resume-head drop-shadow");
        topID = this.id;
        console.log($(this).index());
        $(".resume-section").animate({left:$(this).index() * -705}, 1500, "easeOutExpo");
    });
    //$(".resume-section-body").stop().animate({height: "toggle"}, 0);
    //expandSection(currentResumeSection);
    /*
        $("#"+currentResumeSection+"-body").stop().animate({height:"toggle"}, 'slow', function(){
            currentResumeSection = topID;
            var expandTab = $('#'+topID+'-expand')[0];
            window.location.hash = topID;

            var resumeBody = $('#'+topID+"-body")[0];
            $(resumeBody).animate({height: "toggle"}, 'slow');
        });
    });
    */
});

function expandSection(sectionName){
    $("#"+sectionName+"-body").stop().animate({height: "toggle"}, 'slow');    
}
function closeSection(sectionName){

}
