function notify() {

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    else {
        var notification = new Notification('hello', {
            body: "Hey there!",
        });
        notification.onclick = function () {
            window.open("http://google.com");
        };
    }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

var assignment_names_list = readFileText("file://course.txt")
var assignment_courses_list = []
var assignment_dates_list = []

document.addEventListener('DOMContentLoaded', function() {

    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', function() {

        Notification.requestPermission();
        // notify('notification yes');

        // xPath: //*[@id="notion-app"]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div/div/div[1]/div[3]


        // notify('notification yes');

        // //*[@id="notion-app"]/div/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div/div[2]/div

        // var literallyAnything = document.evaluate('//*[@id="notion-app"]/div/div[1]/div[2]/div[2]/div[1]/div[3]/div/div/div[1]/div[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
        // var literallyAnything2 = document.querySelector("#notion-app > div > div.notion-cursor-listener > div:nth-child(2) > div.notion-frame > div.notion-scroller.vertical.horizontal > div:nth-child(3) > div > div > div.notion-selectable.notion-collection_view_page-block > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span").innerHTML;
        // // alert(wat);
        // alert(literallyAnything2);

        

    }, false);

}, false);