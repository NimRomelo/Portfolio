// script for showing nav button in home section

const navMenuTrigger = document.getElementById("home-content")
const homeName = document.getElementById("nimrod-romelo")
const homeWebDev = document.getElementById("web-developer")
const navMenu = document.getElementById("nav-menu")


//store original styles
const originalStyles = {
    homeName: {
        transform: homeName.style.transform,
        color: homeName.style.color
    },
    homeWebDev: {
        transform: homeWebDev.style.transform,
        color: homeWebDev.style.color
    },
    navMenu: {
        opacity: navMenu.style.opacity
    }
};

//what triggers the animation
navMenuTrigger.addEventListener("mouseenter", showNavMenu)
console.log(navMenuTrigger);

navMenuTrigger.addEventListener("mouseleave", hideNavMenu)

function showNavMenu(){
    homeName.style.transform = "translateY(-60px)";
    homeName.style.color = "#e5caaa";
    homeWebDev.style.transform = "translateY(60px)";
    homeWebDev.style.color = "#e5caaa";
    navMenu.style.opacity = "1";
}

function hideNavMenu(){
    // homeName.style.transform = "translateY(15px)";
    // homeWebDev.style.transform = "translateY(-15px)";
    // navMenu.style.opacity = "0";
    homeName.style.transform = originalStyles.homeName.transform;
    homeName.style.color = originalStyles.homeName.color;
    homeWebDev.style.transform = originalStyles.homeWebDev.transform;
    homeWebDev.style.color = originalStyles.homeWebDev.color;
    navMenu.style.opacity = originalStyles.navMenu.opacity;
}
