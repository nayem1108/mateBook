var settingsMenu = document.querySelector(".settings-menu");
var darkMode = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

darkMode.onclick = function(){
    darkMode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");
    if(localStorage.getItem("theme") === "light")
        localStorage.setItem("theme", "dark");
    else
        localStorage.setItem("theme", "light");

    // document.body.classList.toggle("left-event-background");
}

if(localStorage.getItem("theme") === "light"){
    darkMode.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-mode");
}
else if(localStorage.getItem("theme") === "dark"){
    darkMode.classList.add("dark-btn-on");
    document.body.classList.add("dark-mode");
}

else{
    localStorage.setItem("theme", "light");
}