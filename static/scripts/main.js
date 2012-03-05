var currentResumeSection = (window.location.hash.length > 0) ? window.location.hash.split("#")[1] : "objective";
var topID = '';

$(function(){
    $(".resume-section-body").animate({height: "toggle"}, 0);

    expandSection(currentResumeSection);
    $(".bottom-nav-link, .main-nav-link").click(function(){
        window.location.hash = '';
        console.log(window.location);
        window.location.pathname = this.id;
    });
    
    $(".resume-section-expand").click(function(){
        var expandTab = $('#'+currentResumeSection+'-expand')[0];
        if(expandTab.innerHTML == '+')
            expandTab.innerHTML = '-';
        else
            expandTab.innerHTML = '+';

        topID = this.id.split('-')[0];
        $("#"+currentResumeSection+"-body").animate({height:"toggle"}, 'slow', function(){
            currentResumeSection = topID;
            var expandTab = $('#'+topID+'-expand')[0];
            window.location.hash = topID;
            if(expandTab.innerHTML == '+')
                expandTab.innerHTML = '-';
            else
                expandTab.innerHTML = '+';

            var resumeBody = $('#'+topID+"-body")[0];
            $(resumeBody).animate({height: "toggle"}, 'slow');
        });
    });
});

function expandSection(sectionName){
    $("#"+sectionName+"-body").animate({height: "toggle"}, 'slow');    
    $("#"+sectionName+"-expand").html("-");
}
function closeSection(sectionName){

}
