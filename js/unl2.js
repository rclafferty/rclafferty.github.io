// Warnings to display to the user
const GITHUB_WARNING_TEXT = "Sorry, this project is not available on GitHub";
const DOWNLOAD_WARNING_TEXT = "Sorry, there is no zip file currently available for this project";
// const WEBSITE_URL_WARNING_TEXT = "Sorry, this website is not currently hosted anywhere";

// Programming index variables
programmingIndex = 0;
const PROGRAMMING_TITLE_INDEX = 0;
const PROGRAMMING_GITHUB_INDEX = 1;
const PROGRAMMING_IMAGES_INDEX = 2;
const PROGRAMMING_DOWNLOAD_INDEX = 3;
const PROGRAMMING_TEXT_INDEX = 4;
const PROGRAMMING_CONTRIBUTIONS_INDEX = 5;

const PHOTO_NOT_AVAILABLE = "images/photo_not_available.jpg";

// A 2D array to hold the values for each project
//   1st dimension --> Projects
//   2nd dimension --> Strings for each project
// This approach makes it 1000x easier to rearrange projects if desired, and possibly better performance
const programs = [
    // CryoCrypt (C#)
    [
        "CryoCrypt (C#)",
        "https://github.com/rclafferty/CryoCrypt",
        "images/programming/cryocrypt.png",
        "http://people.cs.ksu.edu/~rclafferty/project_downloads/programming/games/CryoCrypt.zip",
        // "CryoCrypt was my first significant step into game development. I worked alongside three other team members at the 2015 Kansas State University Game Jam to create this game in a span of 48 hours. As a team, we started with brainstorming storyboard ideas, and then quickly moved into programming, art, and so forth. Two students used Adobe Photoshop to hand-craft the art for characters and scenery. Another team member and myself both focused on using Unity C# scripts in order to program the puzzles, algorithms, movement, timers, and more. Myself and one of the artists also recorded voices for the characters using Audacity. Unfortunately, the voice-overs are not implemented in this build.",
        "CryoCrypt was developed by myself and three others at the 2015 Kansas State University Game Jam, created and prepared for judging in under 48 hours based on a given theme: \"Securing the Future.\" Two teammates used Adobe Photoshop to hand-craft the art for characters and scenery while myself and one other teammate focused on using Unity C# scripts to program the puzzles, algorithms, movement, timers, and more.",
        "Creating scripts to control user events, environment events (such as timing out), storyboarding, recording voice-over audio, assisting in level design"
    ],

    // Sand (C#)
    [
        "Sand (C#)",
        "https://github.com/rclafferty/Sand",
        "images/programming/sand.png",
        "http://people.cs.ksu.edu/~rclafferty/project_downloads/programming/games/sand.zip",
        // "Sand was the product of my most recent Game Jam, which was Texas A&M University's Chillennium 2016. Teams from different parts of the country gathered to compete in this Game Jam and as a result, created some awesome games. My team consisted of 1 artist and 3 programmers. All aspects of this game, excluding audio, were made by hand. I found and implemented open source audio files for the background music as well as sound effects. 1 student used Adobe Photoshop to create the art. Myself and 3 others used Unity C# scripts to program character movement, enemy activity, interactivity, controls, and more. Everyone collaborated closely to develop gameplay, theme, and other overall aspects of the game.",
        "Sand was developed by myself and three others at the 2016 Texas A&M Chillennium Game Jam, created and prepared for judging in under 48 hours. All aspects of this game except the music were made by hand. I found and implemented open source audio files for background music and sound effects. One teammate used Adobe Photoshop to create the art while myself and three others used Unity C# scripts to program character movement, enemy activity, interactivity, controls, and more.",
        "Finding open-licensed music, player controls, multiplayer controls, level design"
    ],

    // Securing Cyberville (C#)
    [
        "Securing Cyberville (C#)",
        "#",
        "images/programming/securing_cyberville.jpg",
        "#",
        "Securing Cyberville was created as a senior project at Kansas State University. I worked alongside 1 other team member throughout the semester to create this game. As a team, we started with researching how people learn about cyber security threats, and used that to brainstorm gameplay ideas, map the world, and so forth. The game was created using the Unity game engine, Creative Commons models, and Creative Commons textures.",
        "Level design, vehicle mechanics, dynamically assigning UI choices, UI design, assist with storyboarding and gameplay design, logging events to database (for research web application)"
    ],

    // YGGDRASIL (C#)
    [
        "YGGDRASIL (C#)",
        "https://github.com/rclafferty/KSU-Game-Jam-2018",
        "images/programming/yggdrasil.png",
        "#",
        "YGGDRASIL was a product game made for Kansas State University's 4th Annual Game Jam, created by myself and three others. On this team, there were two programmers, two artists, and all four of us contributed to designing the story, levels, and overall design. This project was created using the Unity game engine, Blender (for 3D models), and open-licensed audio and textures.",
        "Level design, gameplay design, sound effects, level design, storyboarding, UI design, event scripting"
    ],

    // Space Shooter (C++)
    [
        "Space Shooter (C++)",
        "https://github.com/rclafferty/SpaceShooter-Game",
        // "images/programming/space_shooter.png",
        PHOTO_NOT_AVAILABLE,
        "#",
        "Space Shooter was my first exposure to Unreal Engine 4, created as part of an Unreal Engine tutorial on Udemy. The game utilizes simple shapes (cubes and spheres) as well as simple material techniques to provide an easy start to the Unreal Engine development environment. It also exposed me to UI and C++ coding aspects in Unreal Engine 4.",
        "UI implementations, C++ scripting, User Input, Material Design"
    ],

    // Machine Learning Materials (Python and R)
    [
        "Machine Learning Material (Python and R)",
        "https://github.com/rclafferty/Machine-Learning-Tutorial",
        // "images/programming/machine_learning.png",
        PHOTO_NOT_AVAILABLE,
        "#",
        "My Machine Learning materials were developed as part of a tutorial I'm working through on Udemy. I am new to the concept of Machine Learning, so this is my first exposure. The tools used include Anaconda's Spyder environment (Python) and R Studio (R).",
        "Learn Python, Learn R, implement algorithms to train model on certain topics"
    ],

    // Laser Defender (C#)
    [
        "Laser Defender (C#)",
        "https://github.com/rclafferty/Laser-Defender",
        "images/programming/laser_defender.png",
        "#",
        "Laser Defender was a fun Unity C# game based on a Galaga-type influence that was developed as part of a tutorial on Udemy. It was used to learn 2D collisions, events, player controls, and more from a top-down shooter perspective.",
        "UI implementations, Level Design, Character Select functionality, C# scripting, User Input, Material Design"
    ],

    // Block Breaker (C#)
    [
        "Block Breaker (C#)",
        "https://github.com/rclafferty/BlockBreaker",
        "images/programming/block_breaker.png",
        "#",
        "Block Breaker was developed as part of a Unity C# tutorial on Udemy. It teaches 2D collisions, events, triggers, physics, and more at a slower pace to help ease into 2D game development.",
        "UI implementations, Level design, C# scripting, user input, collision detection"
    ],

    // Game Dev Boilerplate Code (C#)
    [
        "Game Dev Boilerplate Code (C#)",
        "https://github.com/rclafferty/Game-Dev-Boilerplate-Code",
        // "images/programming/boilerplate_code.png",
        PHOTO_NOT_AVAILABLE,
        "#",
        "I began developing what I'm calling \"game dev boilerplate code\" as my own form of a universal starter assets package. So far, it's focused on universal player controls, but I will soon begin developing other features such as universal environment events, objects, etc. This will help me and my collaborators begin projects quickly without essentially \"recreating the wheel\" for every game",
        "C# scripting, script design, asset design, apply code in a generalized and scalable manner to be applied outside of a single use-case"
    ]
];
const NUMBER_OF_PROGRAMS = programs.length;

websitesIndex = 0;
const WEBSITES_TITLE_INDEX = 0;
const WEBSITES_URL_INDEX = 1;
const WEBSITES_IMAGES_INDEX = 2;
const WEBSITES_TEXT_INDEX = 3;
const WEBSITES_CONTRIBUTIONS_INDEX = 4;

// A 2D array to hold the values for each project
//   1st dimension --> Projects
//   2nd dimension --> Strings for each project
// This approach makes it 1000x easier to rearrange projects if desired, and possibly better performance
const websites = [
    // History of Overland Park
    [
        "History of Overland Park",
        "http://people.cs.ksu.edu/~rclafferty/prev_websites/overlandpark/",
        "images/websites/overland_park.png",
        "This History of Overland Park website was created as an assignment for my CWEB 105 course at Johnson County Community College. This course used Dreamweaver CS6 to teach students the basics of HTML5 and CSS6. The class assignments focused on molding the style and formatting of websites, specifcally in in the manner you see in this website. The instructor provided us as students with pre-constructed text files that we used in order to create the web pages. This class focused a lot on HTML as relates to using Dreamweaver.",
        "Layout design, implement HTML/CSS design specifications using given content"
    ],

    // My Lai Massacre
    [
        "My Lai Massacre",
        "http://people.cs.ksu.edu/~rclafferty/prev_websites/my_lai/",
        "images/websites/my_lai.png",
        "This website about the My Lai Massacre was created as a final project for my CWEB 105 class at Johnson County Community College. In that class, I was tasked with researching a topic of my own interest and creating a full website using that research. I chose to research the My Lai (pronounced \"mee lahy\") Massacre during the Vietnam War. I am a bit of a \"history buff\" and had heard about this event shortly before the assignment. My research included information about key individuals, groups involved, events of the massacre, and the reprecussions that followed the event. I chose a black and white color scheme to reflect the ominous tone of the event.",
        "Design entire website, UI design, content development, content research"
    ],

    // Securing Cyberville Web Application
    [
        "Securing Cyberville Web Application",
        "http://people.cs.ksu.edu/~rclafferty/securing_cyberville/",
        "images/websites/securing_cyberville.jpg",
        "The web application for Securing Cyberville was developed as part of a research project for an independent study. I took my senior project and logged certain events to a database, including click events, scene changes, picking up items, etc. I then was tasked with making a web application to read from the database and display these events in a searchable and sortable fashion. It was my first time ever creating a web application like this, with the added difficulty of doing so from a Unity game.",
        "Utilizing a pre-existing project to fulfill a research need, database development, PHP script development (to interact between database and web app), HTML/CSS development, searching and sorting functionality"
    ],

    // Paper Summary Website
    [
        "Paper Summary Website",
        "http://people.cs.ksu.edu/~rclafferty/weeklyLogs/",
        "images/websites/weekly_logs.png",
        "The Paper Summary Website was developed as a side project to continue exploring PHP web application development. This website pulls information form a database and displays it to the page. The papers that are being summarized are as part of a independent study I took in Fall 2017, with the feedback being from the instructor.",
        "PHP development, HTML/CSS design, database design, content development"
    ],

    // Responsive CSS Grid Website
    [
        "Responsive CSS Grid Website",
        "https://github.com/rclafferty/Responsive-CSS-Grid-Website",
        "images/websites/responsive_css_website.png",
        "The CSS Grid website was developed as part of a tutorial on Udemy that I was taking to learn JavaScript. It did not use any particular framework, but instead gave a broad intro to JavaScript, HTML, and CSS Grid development.",
        "Layout design, implement HTML/CSS design specifications using given content, JavaScript development, UI implementation"
    ],

    // My Personal Website
    [
        "My Personal Website",
        "https://github.com/rclafferty/rclafferty.github.io",
        "images/websites/personal_website.png",
        "My personal website is one that is both a project and a portfolio. I've hand-written all of the HTML5, CSS3, JS, and PHP code used to construct the designs over the years with very few exceptions. I also use it to showcase my projects, both in programming and web development.",
        "HTML/CSS design, JavaScript/PHP development, content development"
    ]
];
const NUMBER_OF_WEBSITES = websites.length;

window.addEventListener('load', function() {
    // Initialize programming information
    programmingIndex = 0;
    setProgrammingDetails(programs[programmingIndex]);

    // Initialize website information
    websitesIndex = 0;
    setWebsitesDetails(websites[websitesIndex]);
})

// Start Programming Functions
function programmingNext()
{
    programmingIndex = (programmingIndex + 1) % NUMBER_OF_PROGRAMS;
    setProgrammingDetails(programs[programmingIndex]);
}

function programmingPrevious()
{
    programmingIndex--;
    if (programmingIndex == -1)
    {
        programmingIndex += NUMBER_OF_PROGRAMS;
    }
    setProgrammingDetails(programs[programmingIndex]);
}

function setProgrammingDetails(program)
{
    document.getElementById("programmingProjectTitle").textContent = program[PROGRAMMING_TITLE_INDEX] + " - " + (programmingIndex + 1) + "/" + NUMBER_OF_PROGRAMS;
    document.getElementById("programmingImage").src = program[PROGRAMMING_IMAGES_INDEX];

    if (program[PROGRAMMING_IMAGES_INDEX] == PHOTO_NOT_AVAILABLE)
    {
        document.getElementById("programmingImage").style.width = '300px';
    }
    else
    {
        document.getElementById("programmingImage").style.width = '100%';
    }

    document.getElementById("programmingImage").alt = "Image for " + program[PROGRAMMING_TITLE_INDEX];
    document.getElementById("programmingText").textContent = program[PROGRAMMING_TEXT_INDEX];
    document.getElementById("programmingDuties").textContent = program[PROGRAMMING_CONTRIBUTIONS_INDEX];
}

function showOnGitHub()
{
    github_link = programs[programmingIndex][PROGRAMMING_GITHUB_INDEX];
    if (github_link == "#")
    {
        alert(GITHUB_WARNING_TEXT);
    }
    else
    {
        window.open(github_link, '_blank');
    }
}

function downloadZip()
{
    download_link = programs[programmingIndex][PROGRAMMING_DOWNLOAD_INDEX];
    if (download_link == "#")
    {
        alert(DOWNLOAD_WARNING_TEXT);
    }
    else
    {
        window.open(download_link, '_self');
    }
}
// End Programming Functions

// Start Website Functions
function websitesNext()
{
    websitesIndex = (websitesIndex + 1) % NUMBER_OF_WEBSITES;
    
    setWebsitesDetails(websites[websitesIndex]);
}

function websitesPrevious()
{
    websitesIndex--;
    if (websitesIndex == -1)
    {
        websitesIndex += NUMBER_OF_WEBSITES;
    }

    setWebsitesDetails(websites[websitesIndex]);
}

function setWebsitesDetails(website)
{
    websiteTitle = website[WEBSITES_TITLE_INDEX];
    if (websiteTitle == "My Personal Website")
    {
        document.getElementById("websiteLinkButton").textContent = "View on GitHub Pages";
    }
    else
    {
        document.getElementById("websiteLinkButton").textContent = "View Website";
    }

    document.getElementById("websitesProjectTitle").textContent = websiteTitle + " - " + (websitesIndex + 1) + "/" + NUMBER_OF_WEBSITES;
    document.getElementById("websitesImage").src = website[WEBSITES_IMAGES_INDEX];
    document.getElementById("websitesImage").alt = "Image for " + websiteTitle;
    document.getElementById("websitesText").textContent = website[WEBSITES_TEXT_INDEX];
    document.getElementById("websitesDuties").textContent = website[WEBSITES_CONTRIBUTIONS_INDEX];
}

function showWebsite()
{
    window.open(websites[websitesIndex][WEBSITES_URL_INDEX], '_blank');
}
// End Website Functions

function error(object)
{
    object.onerror = null;
    object.src = PHOTO_NOT_AVAILABLE;
    object.style.width = '300px';
    object.style.height = '300px';
}