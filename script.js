const navMenuTrigger = document.getElementById("home-content")
const homeName = document.getElementById("nimrod-romelo")
const homeWebDev = document.getElementById("web-developer")
const navMenu = document.getElementById("nav-menu")

navMenuTrigger.addEventListener("mouseenter", showNavMenu)
console.log(navMenuTrigger);

navMenuTrigger.addEventListener("mouseleave", hideNavMenu)

function showNavMenu(){
    homeName.style.transform = "translateY(-60px)";
    homeWebDev.style.transform = "translateY(60px)";
    homeWebDev.style.color = "#e5caaa";
    navMenu.style.opacity = "1";
}

function hideNavMenu(){
    homeName.style.transform = "translateY(60px)";
    homeWebDev.style.transform = "translateY(-60px)";
    homeWebDev.style.color = "#1daec8";
    navMenu.style.opacity = "0";
}
