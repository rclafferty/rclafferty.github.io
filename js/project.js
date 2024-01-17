var gamedev = undefined;
var software = undefined;
var webdev = undefined;

fetch('./json/gamedev.json')
    .then(res => res.json())
    .then(data => {
        gamedev = data;
    });

fetch('./json/software.json')
    .then(res => res.json())
    .then(data => {
        software = data;
    });

fetch('./json/webdev.json')
    .then(res => res.json())
    .then(data => {
        webdev = data;
    });

function too_small_for_js_elements() {
    return window.innerWidth < 870;
}

function project_click() {
    if (too_small_for_js_elements())
        return true;

    overlay_on();
    project_show_contents();
    return false;
}

function project_show_contents() {
    document.getElementById("project-overlay-contents").classList.remove("hidden");
    document.getElementById("overlay-solid-back").classList.add("wide-overlay");
    document.getElementById("overlay-solid-back").classList.remove("thin-overlay");

    // Remove URL (more importantly: stop playing audio)
    document.getElementById("sizzle-reel").setAttribute("src", "");
}

function project_hide_contents() {
    document.getElementById("project-overlay-contents").classList.add("hidden");

    // Remove URL (more importantly: stop playing audio)
    document.getElementById("project-overlay-embed").setAttribute("src", "");
    document.getElementById("sizzle-reel").setAttribute("src", "https://www.youtube.com/embed/TWuPwthgXao?si=ZPsH08hrkjOIZVxi");
}

function project_show_embed_video(url) {
    if (url == undefined)
        return;

    var embed = document.getElementById("project-overlay-embed");
    embed.classList.remove("hidden");
    embed.classList.add("shown");
    embed.setAttribute("src", url);
}

function project_hide_embed_video() {
    var embed = document.getElementById("project-overlay-embed");
    embed.classList.add("hidden");
    embed.classList.remove("shown");
}

function project_show_alt_picture(path) {
    if (path == undefined)
        return;

    var altPicture = document.getElementById("project-overlay-alt-picture");
    altPicture.classList.remove("hidden");
    altPicture.setAttribute("src", path);
    altPicture.classList.add("shown");
}

function project_hide_alt_picture() {
    var altPicture = document.getElementById("project-overlay-alt-picture");
    altPicture.classList.add("hidden");
    altPicture.classList.remove("shown");
}

function project_show_itch(url) {
    if (url == undefined)
        return;

    var itchLink = document.getElementById("project-overlay-itch-link");
    itchLink.setAttribute("href", url);
    itchLink.innerHTML = url;

    var itch_elements = document.getElementsByClassName("project-overlay-itch");
    if (itch_elements == undefined)
        return;
    
    for (i = 0; i < itch_elements.length; i++)
        itch_elements[i].classList.remove("hidden");
}

function project_hide_itch() {
    var itch_elements = document.getElementsByClassName("project-overlay-itch");
    if (itch_elements == undefined)
        return;
    
    for (i = 0; i < itch_elements.length; i++)
        itch_elements[i].classList.add("hidden");
}

function project_show_live(url) {
    if (url == undefined)
        return;

    var liveLink = document.getElementById("project-overlay-live-link");
    liveLink.setAttribute("href", url);
    liveLink.innerHTML = url;

    var live_elements = document.getElementsByClassName("project-overlay-live");
    if (live_elements == undefined)
        return;
    
    for (i = 0; i < live_elements.length; i++)
        live_elements[i].classList.remove("hidden");
}

function project_hide_live() {
    var live_elements = document.getElementsByClassName("project-overlay-live");
    if (live_elements == undefined)
        return;
    
    for (i = 0; i < live_elements.length; i++)
        live_elements[i].classList.add("hidden");
}

function project_set_github_link(url) {
    if (url == undefined)
        return;

    var githubLink = document.getElementById("project-overlay-github-link");
    githubLink.setAttribute("href", url);
    githubLink.innerHTML = url;
    githubLink.classList.remove("hidden");
}

function project_hide_github_link() {
    document.getElementById("project-overlay-github-link").classList.add("hidden");

    var github_elements = document.getElementsByClassName("project-overlay-github");
    if (github_elements == undefined)
        return;
    
    for (i = 0; i < github_elements.length; i++)
        github_elements[i].classList.add("hidden");
}

function project_set_description(description) {
    if (description == undefined)
        return;

    document.getElementById("project-overlay-description").innerHTML = description;
}

function project_set_roles(roles) {
    if (roles == undefined)
        return;

    document.getElementById("project-overlay-roles").innerHTML = "<strong>Roles: </strong> " + roles;
}

function project_set_platform(platform) {
    if (platform == undefined)
        return;

    document.getElementById("project-overlay-platform").innerHTML = "<strong>Platform Support:</strong> " + platform;
}

function project_set_learn(learn) {
    if (learn == undefined)
        return;

    document.getElementById("project-overlay-learn").innerHTML = "<strong>What have I learned?</strong> " + learn;
}

/**************************************/
/***** GAME DEV PROJECT FUNCTIONS *****/
/**************************************/
function set_project_overlay_data(json, projectName) {
    if (json == undefined)
        return;
    
    if (projectName == undefined)
        return;

    var projectData = undefined;
    var projectSet = json.projects;
    for (i = 0; i < projectSet.length; i++)
    {
        if (projectSet[i].title == projectName)
        {
            projectData = projectSet[i];
            break;
        } 
    }
    
    if (projectData == undefined)
    {
        console.error("RCL: DID NOT FIND PROJECT DATA.");
        return;
    }

    project_set_description(projectData['description']);
    project_set_roles(projectData['roles']);
    project_set_platform(projectData['platform-support']);
    project_set_learn(projectData['what-i-learned']);

    if (projectData['github-link'] != undefined)
    {
        project_set_github_link(projectData['github-link']);
    }
    else
    {
        project_hide_github_link();
    }

    if (projectData['itch-link'] != undefined)
    {
        project_show_itch(projectData['itch-link']);
    }
    else
    {
        project_hide_itch();
    }

    if (projectData['web-link'] != undefined)
    {
        project_show_live(projectData['web-link']);
    }
    else
    {
        project_hide_live();
    }

    if (projectData['youtube-link'] != undefined)
    {
        project_show_embed_video(projectData['youtube-link']);
        project_hide_alt_picture();
    }
    else
    {
        project_hide_embed_video();
        
        if (projectData['project-image'] != undefined)
        {
            project_show_alt_picture(projectData['project-image']);
        }
        else
        {
            project_hide_alt_picture();
        }
    }
}

function platform_switcher_click() {
    set_project_overlay_data(gamedev, "Platform Switcher");
    return project_click();
}

function building_escape_click() {
    set_project_overlay_data(gamedev, "Building Escape");
    return project_click();
}

function space_shooter_click() {
    set_project_overlay_data(gamedev, "Space Shooter");
    return project_click();
}

function packet_delivery_click() {
    set_project_overlay_data(gamedev, "Packet Delivery");
    return project_click();
}

function the_three_mutineers_click() {
    set_project_overlay_data(gamedev, "The Three Mutineers");
    return project_click();
}

function leaf_me_alone_click() {
    set_project_overlay_data(gamedev, "Leaf Me Alone!");
    return project_click();
}

function internet_inc_click() {
    set_project_overlay_data(gamedev, "Internet, Inc.");
    return project_click();
}

function laser_defender_click() {
    set_project_overlay_data(gamedev, "Laser Defender");
    return project_click();
}

function transformation_click() {
    set_project_overlay_data(gamedev, "Transformation");
    return project_click();
}

function wrath_of_raoden_click() {
    set_project_overlay_data(gamedev, "Wrath of Raoden");
    return project_click();
}

/**************************************/
/***** SOFTWARE PROJECT FUNCTIONS *****/
/**************************************/
function frogbot_click() {
    set_project_overlay_data(software, "FrogBot");
    return project_click();
}

function gdc_database_click() {
    set_project_overlay_data(software, "UNL GDC Admin Database");
    return project_click();
}

function machine_learning_click() {
    set_project_overlay_data(software, "Machine Learning");
    return project_click();
}

/*************************************/
/***** WEBSITE PROJECT FUNCTIONS *****/
/*************************************/
function personal_website_click() {
    set_project_overlay_data(webdev, "My Personal Website");
    return project_click();
}

function unl_gdc_website_click() {
    set_project_overlay_data(webdev, "UNL Game Dev Club Website");
    return project_click();
}

function securing_cyberville_click() {
    set_project_overlay_data(webdev, "Securing Cyberville Logs");
    return project_click();
}

function unl_trio_click() {
    set_project_overlay_data(webdev, "UNL TRIO Website");
    return project_click();
}