"using strict"

window.onload = function () {
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;
}

function toggleNav(){
    const navItems = document.getElementById("main-nav");
    navItems.classList.toggle("hidden");
}
