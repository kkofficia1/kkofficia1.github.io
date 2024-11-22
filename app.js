const toggleDarkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const darkModeSwitch = document.getElementById("darkmode");
darkModeSwitch.addEventListener("click", toggleDarkMode);