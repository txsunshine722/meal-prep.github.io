


console.log("HubCity Prep JavaScript is running!");

const menuButton = document.getElementById("menu-button");
const weeklyMenu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
    weeklyMenu.scrollIntoView({
        behavior: "smooth"
    });
});




