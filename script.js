const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

// Open and close the mobile navigation menu
if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        navigationLinks.classList.toggle("active");

        const isOpen = navigationLinks.classList.contains("active");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

// Close the mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (navigationLinks && menuButton) {
            navigationLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        }
    });
});

// Automatically update the copyright year
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Add a small shadow to the header after scrolling
const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 20) {
        siteHeader.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.25)";
    } else {
        siteHeader.style.boxShadow = "none";
    }
});
