var toggle = document.getElementById("theme-toggle");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);
toggle.onclick = function() {
var currentTheme = document.documentElement.getAttribute("data-theme");
var targetTheme = "light";
if (currentTheme === "light") {
targetTheme = "dark";
}
document.documentElement.setAttribute('data-theme', targetTheme);
localStorage.setItem('theme', targetTheme);
};

(() => {
	const copyrightElement = document.getElementById("copyright");
	copyrightElement.innerHTML = "&copy; 2022 - "+new Date().getFullYear()+" The Liberty Emporium - All Rights Reserved.";
})();
