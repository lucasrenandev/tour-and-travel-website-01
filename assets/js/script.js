const headerNav = document.querySelector("header nav")

window.addEventListener("scroll", function() {
    headerNav.classList.toggle("sticky", window.scrollY > 0)
})