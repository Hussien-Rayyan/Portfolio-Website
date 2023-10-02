// -------------------------------------------  Style Switcher -----------------------------------------------------------
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// ----------------------------------------  Hide Style Switcher On Scroll -----------------------------------------------------------
window.addEventListener("scroll", () => {
    if ( document.querySelector(".style-switcher").classList.contains("open"))
    {
    document.querySelector(".style-switcher").classList.remove("open");
        
    }
})
// ----------------------------------------  Theme Colors -----------------------------------------------------------
const altrnateStyle = document.querySelectorAll(".altarnate-style");
function setActiveStyle(color) {
    altrnateStyle.forEach((style) => {
        if (color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
// ----------------------------------------  Theme light & Dark Mode -----------------------------------------------------------
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" ,() =>{
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
} )
// ----------------------------------------  Typing Animation -----------------------------------------------------------
let typed = new Typed(".typing", {
    strings:["Web Developer" , "Accountaner" ,"Web Designer"] ,
    typeSpeed:100,
    backSpeed:60 ,
    loop:true
})