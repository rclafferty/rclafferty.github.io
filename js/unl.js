github_warning = "javascript:alert(\"Sorry, this project is not available on GitHub\");";
programming_urls = [ github_warning, github_warning, github_warning ];
programming_imgs = [ "images/programming/cryocrypt.png", "images/programming/sand.png", "images/programming/securing_cyberville.jpg"];
programming_exe_links = [ "#", "#", "#" ];

website_urls = [ "people.cs.ksu.edu/~rclafferty/prev_websites/overlandpark/index.html" ];
website_imgs = [];

programmingIndex = -1;
websiteIndex = -1;

eventListeners();
// ui.programmingNext();
// ui.websiteNext();

function eventListeners()
{
    const ui = new UI();
    document.getElementById("programmingNextArrow", function() {
        ui.programmingNext();
    });
    
    document.getElementById('websiteNextArrow', function() {
        ui.websiteNext();
    });

    // document.querySelector('#programmingImage').src = programming_imgs[0];
    // document.querySelector('#programmingGithubButton').href = programming_urls[0];
    // document.querySelector('#programmingDownloadButton').href = programming_exe_links[0];

    ui.programmingNext();
    ui.websiteNext();
}

function UI() {
    // Constructor
    // window.location.href = programming_urls[0];
}

UI.prototype.programmingNext = function() {
    event.preventDefault();
    alert("programmingNext called");
    programmingIndex++;

    if (programmingIndex == programming_urls.length)
    {
        programmingIndex = 0;
    }

    let links = document.getElementsByTagName("a");
    let images = document.getElementsByTagName("img");
    
    // Assign image to programming_imgs[programmingIndex]
    images[0].src = programming_imgs[programmingIndex];
    // Assign github URL to programming_urls[programmingIndex]
    links[7].href = programming_urls[programmingIndex];
    // Assign exe link to programming_exe_links[programmingIndex]
    links[6].href = programming_exe_links[programmingIndex];
}

UI.prototype.websiteNext = function() {
    alert("websiteNext called");
    websiteIndex++;

    if (websiteIndex == website_urls.length)
    {
        websiteIndex = 0;
    }

    // Assign website img to webiste_imgs[websiteIndex]
    document.querySelector('#websiteImage').src = website_imgs[websiteIndex];
    // Assign website url to website_urls[websiteIndex]
    document.querySelector('#websteButton').href = website_urls[websiteIndex];
}