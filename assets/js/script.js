const headerNav = document.querySelector("header nav")
const scrollArrow = document.querySelector(".scroll-arrow")
const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar")

window.addEventListener("scroll", function() {
    headerNav.classList.toggle("sticky", window.scrollY > 0)
})

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

function hiddenScrollArrow() {
    if(window.scrollY < 800) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}

window.addEventListener("scroll", function() {
    hiddenScrollArrow()
    navBar.classList.remove("active")
    menuIcon.classList.remove("active")
})
hiddenScrollArrow()   