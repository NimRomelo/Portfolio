// trigger sticky navbar====================================
window.addEventListener("scroll", stickyNav)

function stickyNav() {
    let navBar = document.getElementsByClassName("navbar")[0]
    if (window.scrollY > 30) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }

}


//home animation start====================================

//variable declarations
const navMenuTrigger = document.getElementById("home-content")
const homeName = document.getElementById("nimrod-romelo")
const homeWebDev = document.getElementById("web-developer")
const navMenu = document.getElementById("nav-menu")
const quoteMark = document.getElementById("quote1")
const quotePara = document.getElementsByClassName("quote")[0]
const quoteAuthor = document.getElementsByClassName("quote-author")[0]
const clickMeLine = document.getElementsByClassName("click-me-line")[0]

//what triggers the animation
navMenuTrigger.addEventListener("mouseenter", showNavMenu);
navMenuTrigger.addEventListener("mouseleave", hideNavMenu);

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
    },
    quoteMark: {
        margin: quoteMark.style.margin
    },
    quotePara: {
        opacity: quotePara.style.opacity
    },
    quoteAuthor: {
        opacity: quoteAuthor.style.opacity
    },
    clickMeLine: {
        opacity: clickMeLine.style.opacity
    }
};

//functions

function showNavMenu(){
    homeName.style.transform = "translateY(-60px)";
    homeName.style.color = "#e5caaa";
    homeWebDev.style.transform = "translateY(60px)";
    homeWebDev.style.color = "#e5caaa";
    navMenu.style.opacity = "1";
    quotePara.style.opacity = "1";
    quoteAuthor.style.opacity = "1";
    clickMeLine.style.opacity = "0";

    if(window.innerWidth < 616) {
        quoteMark.style.margin = "0 15rem 0 0";
    } else {
        quoteMark.style.margin = "0 20rem 0 0";
    }
    console.log(showNavMenu)
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
    quoteMark.style.margin = originalStyles.quoteMark.margin;
    quotePara.style.opacity = originalStyles.quotePara.opacity;
    quoteAuthor.style.opacity = originalStyles.quoteAuthor.opacity;
    clickMeLine.style.opacity=originalStyles.clickMeLine.opacity;
}   
// home animation end======================================


// swiper js

