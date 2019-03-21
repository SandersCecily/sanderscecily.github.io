//function to show accordian
$(".card-header").click(function(){
    if($("#others").hasClass("collapse show")){
        $("#others").removeClass();
        $("#others").addClass("collapse");
    }
    else if ($("#others").addClass("collapse")){
        $("#others").removeClass();
        $("#others").addClass("collapse show");
    }
});

function populateProjects(){
    
}