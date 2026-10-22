console.log("HubCity Prep JavaScript is running!");

const menuButton = document.getElementById("menu-button");
const menuMessage = document.getElementById("menu-message");

menuButton.addEventListener("click", function() {
    menuMessage.hidden = !menuMessage.hidden;
});

