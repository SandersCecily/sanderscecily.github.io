/*
The student has met all of the requirements under "Employer Competitive." 
This means not only do they have a polished portfolio page linking to at least 3 projects, 
but they have also updated their GitHub repos with detailed READMEs and their LinkedIn. 
Only award an A+ if they've also refactored code from an earlier assignment. 
You should ask them if they're comfortable letting you share their portfolio with the rest of the class, 
*especially* if they aren't among your most technically strong students 
to encourage other students who may be struggling with impostor syndrome.
*/


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