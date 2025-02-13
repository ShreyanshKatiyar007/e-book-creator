// Smooth Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
    let aboutSection = document.querySelector(".content-section");

    function reveal() {
        let scrollPosition = window.scrollY + window.innerHeight;
        let aboutTop = aboutSection.offsetTop;
        if (scrollPosition > aboutTop) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", reveal);
    reveal();
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerHTML = document.body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});
