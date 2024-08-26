function resume_click() {
    overlay_on();
    resume_show_contents();
    return false;
}

function resume_show_contents() {
    document.getElementById("overlay-solid-back").classList.remove("wide-overlay");
    document.getElementById("overlay-solid-back").classList.add("thin-overlay");
    document.getElementById("resume-overlay-contents").classList.remove("hidden");
}

function resume_hide_contents() {
    document.getElementById("resume-overlay-contents").classList.add("hidden");
}