const themeToggle = document.querySelector("#switch button");

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const isLighttheme = html.classList.contains("light");
    themeToggle.style.backgroundImage = isLighttheme ? "url(sun.svg)" : "url(lua.svg)";
}

themeToggle.addEventListener("click", toggleMode);