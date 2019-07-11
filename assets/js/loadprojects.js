//On Doc Load
document.addEventListener("DOMContentLoaded", function () {
    function main() {
        console.log('document.location', document.location.href);
        $.ajax({
            url: "../projects.json",
            dataType: "json",
            method: "GET",
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    //create div
                    var div = document.createElement("div");
                    div.setAttribute("class", "card");
                    
                    //add header
                    var header = document.createElement("h3");
                    var t = document.createTextNode(data[i].title);
                    header.appendChild(t);
                    div.appendChild(header);
                    
                    //add description
                    var desc = document.createElement("p");
                    var descp = document.createTextNode(data[i].description);
                    desc.appendChild(descp);
                    div.appendChild(desc);

                    //button git
                    var gitbutton = document.createElement("button");
                    var text = document.createTextNode("Git Link");
                    var aGitTag = document.createElement("a");
                    aGitTag.setAttribute("href", data[i].gitlink);
                    aGitTag.appendChild(text);
                    aGitTag.setAttribute("target", "_blank");
                    gitbutton.appendChild(aGitTag);
                    div.appendChild(gitbutton);
                    
                    //button deployed
                    var depbutton = document.createElement("button");
                    var deptext = document.createTextNode("Check it out");
                    var aDepTag = document.createElement("a");
                    aDepTag.setAttribute("href", data[i].deploylink);
                    aDepTag.appendChild(deptext);
                    aDepTag.setAttribute("target", "_blank");
                    depbutton.appendChild(aDepTag);
                    div.appendChild(depbutton);


                    document.getElementById("projects").appendChild(div);
                }
            }
        });
    };

    //run total program.
    main();
});