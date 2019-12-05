$(document).ready(function () {
    var size = $("a").css("fontSize");
    $("a").hover(function () {
        $(this).css("fontSize", "30px");
    }, function () {
        $(this).css("fontSize", size);
    });

    loadDoc()
});

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gotRepos(this.responseText)
        }
    };
    xhttp.open("GET", "https://api.github.com/users/AdamBlaire1/repos", true);
    xhttp.send();
}



function gotRepos(raw) {
    //$('#raw-GitHub').text(raw)



    const data = JSON.parse(raw)

    // do some stuff with `data`

    for (var repo of data) {
        $('<p>').text(`My repositories! : ${repo.name}!`).appendTo('#GitHub')
    }
}