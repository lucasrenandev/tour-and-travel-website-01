const headerNav = document.querySelector("header nav")
const scrollArrow = document.querySelector(".scroll-arrow")

window.addEventListener("scroll", function() {
    headerNav.classList.toggle("sticky", window.scrollY > 0)
})

scrollArrow.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

function hiddenScrollArrow() {
    if(window.scrollY < 800) {
        scrollArrow.style.display = "none"
    }
    else {
        scrollArrow.style.display = "inline-flex"
    }
}
window.addEventListener("scroll", hiddenScrollArrow)
hiddenScrollArrow()   