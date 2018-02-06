var xmlhttpObject = new XMLHttpRequest();
xmlhttpObject.open('GET', 'content.json');
xmlhttpObject.send();
xmlhttpObject.addEventListener('load', function (e) {
    // Save the results
    var input = e.target.response;
    var response = JSON.parse(input);
    var responses = response.content.length;

    var titlediv = document.getElementById("title");
    var descriptiondiv = document.getElementById('para1');
    var nextdiv = document.getElementById("next");
    var forwarddiv = document.getElementsByClassName("forward");
    var previousdiv = document.getElementsByClassName("previous");
    var expandcollapsediv =document.getElementById("expandcollapse");
    var collapsediv = document.getElementById("collapse");

    var i = 0;
    display(i);
    collapsediv.addEventListener('click', function(){
        if (expandcollapsediv.style.display === "none") {
            expandcollapsediv.style.display = "block";
        } else {
            expandcollapsediv.style.display = "none";
        }
    });

    nextdiv.addEventListener('click', function (e) {
        i++;
        display(i);
    });

    forwarddiv[0].addEventListener('click', function (e) {
        i++;
        display(i);
    });


    previousdiv[0].addEventListener('click', function (e) {
        if (i > 0) {
            i--;
        }
        display(i);
    });

    function display(i) {
        if (responses > 0) {
            console.log("inside i", i);
            titlediv.innerHTML = response.title;
            var record = response.content[i++ % responses];
            descriptiondiv.innerHTML = record.description;
            nextdiv.innerHTML = response.content[i++ % responses].title;
        }
    }
    
});
