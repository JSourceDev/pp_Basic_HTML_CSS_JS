// Theme Toggle Button Logic

// Add a click event listener to the theme toggle button
document.getElementById("theme-toggle").addEventListener("click", () => {

    // Applies dark theme style
    document.body.classList.toggle("dark");

    // Applies light theme style
    document.body.classList.toggle("light");

    // Little extra: site will remember the last choice of theme
    const isDark = document.body.classList.contains("dark"); // check if dark mode is active
    localStorage.setItem("theme", isDark ? "dark" : "light"); // save current theme
});

// Load Theme Preference on Page Load

//Loads after HTML but before anything else
window.addEventListener("DOMContentLoaded", () => {

    // Get the previously saved theme from localStorage (if there is any)
    const savedTheme = localStorage.getItem("theme");

    // Apply the saved theme
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // If no theme is saved, apply the default - light theme
        document.body.classList.add("light");
    }
});

// Scroll-To-Top Button Logic

// Get the "scroll to top" button element
const scrollBtn = document.getElementById("scroll-top");

// Shows/hides the button based on scroll position
window.addEventListener("scroll", () => {
    // Shows the button if the user scrolled more than 200px down
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// Smoothly scrolls to top when the button is clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});