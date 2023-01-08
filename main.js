const bars = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
bars.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.height = "0";
        nav.style.opacity = "0";
    } else {
        this.classList.add("clicked");
        nav.style.height = "auto";
        nav.style.opacity = "1";
    }
});

const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "#B3D1FA";
        goUp.style.opacity = "0";
    } else if (this.scrollY > 500) {
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 0 5px #eee";
        goUp.style.opacity = "1";
    }
});