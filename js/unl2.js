github_warning_text = "Sorry, this project is not available on GitHub";
github_warning = "javascript:alert(\"" + github_warning_text + "\");";

programmingIndex = 0;
programming_titles = [ "CryoCrypt (C#)", "Sand (C#)", "Securing Cyberville (C#)"];
programming_urls = [ github_warning, github_warning, github_warning ];
programming_imgs = [ "images/programming/cryocrypt.png", "images/programming/sand.png", "images/programming/securing_cyberville.jpg"];
programming_exe_links = [ "#", "#", "#" ];
programming_text = [ 
    "CryoCrypt was my first significant step into game development. I worked alongside 3 other team members at the 2015 Kansas State University Game Jam to create this game in a span of 48 hours. As a team, we started with brainstorming storyboard ideas, and then quickly moved into programming, art, and so forth. 2 students used Adobe Photoshop to hand-craft the art for characters and scenery. Another team member and myself both focused on using Unity C# scripts in order to program the puzzles, algorithms, movement, timers, and more. Myself and 1 of the artists also recorded voices for the characters using Audacity. Unfortunately, the voice-overs are not implemented in this build.",
    "Sand was the product of my most recent Game Jam, which was Texas A&M University's Chillennium 2016. Teams from different parts of the country gathered to compete in this Game Jam and as a result, created some awesome games. My team consisted of 1 artist and 3 programmers. All aspects of this game, excluding audio, were made by hand. I found and implemented open source audio files for the background music as well as sound effects. 1 student used Adobe Photoshop to create the art. Myself and 3 others used Unity C# scripts to program character movement, enemy activity, interactivity, controls, and more. Everyone collaborated closely to develop gameplay, theme, and other overall aspects of the game.",
    "Securing Cyberville was created as a senior project at Kansas State University. I worked alongside 1 other team member throughout the semester to create this game. As a team, we started with researching how people learn about cyber security threats, and used that to brainstorm gameplay ideas, map the world, and so forth. The game was created using the Unity game engine, Creative Commons models, and Creative Commons textures."
];
programming_duties = [ "", "", "" ];

websitesIndex = 0;
websites_titles = [ "History of Overland Park", "My Lai Massacre", "Securing Cyberville Web Application", "Paper Summary Website"];
websites_urls = [ "", "", "", "" ];
websites_imgs = [ "images/websites/overland_park.png", "images/websites/my_lai.png", "images/websites/securing_cyberville.jpg", "images/websites/weekly_logs.png"];
websites_exe_links = [ "#", "#", "#", "#" ];
websites_text = [ 
    "This History of Overland Park website was created as an assignment for my CWEB 105 course at Johnson County Community College. This course used Dreamweaver CS6 to teach students the basics of HTML5 and CSS6. The class assignments focused on molding the style and formatting of websites, specifcally in in the manner you see in this website. The instructor provided us as students with pre-constructed text files containing information about John Overland Park, Betsy Lenexa, inventions of the late 1800s, and more that we used in order to create the web pages. This class focused a lot on HTML as relates to using Dreamweaver and not the HTML itself, but rightfully so. I quickly realized that Dreamweaver is a great tool for aiding in web development and I enjoyed using it.",
    "This website about the My Lai Massacre was created as a final project for my CWEB 105 class at Johnson County Community College. In that class, I was tasked with researching a topic of my own interest and creating a full website using that research. I chose to research the My Lai (pronounced \"mee lahy\") Massacre during the Vietnam War. I am a bit of a \"history buff\" and had heard about this event shortly before the assignment. My research included information about key individuals, groups involved, events of the massacre, and the reprecussions that followed the event. I chose a black and white color scheme to reflect the ominous tone of the event.",
    "[Text about Securing Cyberville Web Application Website here]",
    "[Text about Paper Summary Website here]"
];
websites_duties = [ "", "", "", "" ];


window.addEventListener('load', function() {
    // Initialize programming information
    programmingIndex = 0;
    setProgrammingDetails(programmingIndex);

    // Initialize website information
    websitesIndex = 0;
    setWebsitesDetails(websitesIndex);
})

// Start Programming Functions
function programmingNext()
{
    programmingIndex = (programmingIndex + 1) % programming_imgs.length;
    
    setProgrammingDetails(programmingIndex);
}

function programmingPrevious()
{
    programmingIndex--;
    if (programmingIndex == -1)
    {
        programmingIndex += programming_imgs.length;
    }

    setProgrammingDetails(programmingIndex);
}

function setProgrammingDetails(index)
{
    document.getElementById("programmingProjectTitle").textContent = programming_titles[index];
    document.getElementById("programmingImage").src = programming_imgs[index];
    document.getElementById("programmingImage").alt = programming_titles[index];
    document.getElementById("programmingText").textContent = programming_text[index];
    document.getElementById("programmingDuties").textContent = 'My contributions included: ' + programming_duties[index];
}

function showOnGitHub()
{
    if (programming_urls[programmingIndex] == github_warning)
    {
        alert(github_warning_text);
    }
    else
    {
        window.open(programming_urls[programmingIndex], '_blank');
    }
}
// End Programming Functions

// Start Website Functions
function websitesNext()
{
    websitesIndex = (websitesIndex + 1) % websites_imgs.length;
    
    setWebsitesDetails(websitesIndex);
}

function websitesPrevious()
{
    websitesIndex--;
    if (websitesIndex == -1)
    {
        websitesIndex += websites_imgs.length;
    }

    setWebsitesDetails(websitesIndex);
}

function setWebsitesDetails(index)
{
    document.getElementById("websitesProjectTitle").textContent = websites_titles[index];
    document.getElementById("websitesImage").src = websites_imgs[index];
    document.getElementById("websitesImage").alt = websites_titles[index];
    document.getElementById("websitesText").textContent = websites_text[index];
    document.getElementById("websitesDuties").textContent = 'My contributions included: ' + websites_duties[index];
}
// End Website Functions
