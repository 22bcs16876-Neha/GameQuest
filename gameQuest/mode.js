document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check localStorage for the theme
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggle.checked = savedTheme === "dark";
    themeIcon.textContent = savedTheme === "dark" ? "🌙" : "🌞";

    // Theme toggle event listener
    themeToggle.addEventListener("change", function () {
        const theme = this.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
    });
});