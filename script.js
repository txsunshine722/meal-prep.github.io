console.log("HubCity Prep JavaScript is running!");

const menuButton = document.getElementById("menu-button");
const menuMessage = document.getElementById("menu-message");

menuButton.addEventListener("click", function() {
    menuMessage.hidden = !menuMessage.hidden;

    if (menuMessage.hidden === false) {
        menuButton.textContent = "Hide Menu Message";
    } else {
        menuButton.textContent = "Check This Week's Menu";
    }
});

