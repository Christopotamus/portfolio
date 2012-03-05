var currentResumeSection = 'objective';
var topID = '';

$(function(){
    $(".resume-section-body").animate({height: "toggle"}, 0);

    $("#objective-body").animate({height: "toggle"}, 'slow');    
    $("#objective-expand").html("-");

    $(".bottom-nav-link, .main-nav-link").click(function(){
        window.location.href = this.id;
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
            if(expandTab.innerHTML == '+')
                expandTab.innerHTML = '-';
            else
                expandTab.innerHTML = '+';

            var resumeBody = $('#'+topID+"-body")[0];
            $(resumeBody).animate({height: "toggle"}, 'slow');
        });
    });
});

