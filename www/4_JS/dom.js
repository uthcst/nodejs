function onClick() {
    console.log("Button Clicked");
}
function onAlert() {
    alert("Alert !!!");
}
const buttonClick = document.querySelector("#ButtonClick");
const buttonAlert = document.querySelector("#ButtonAlert");
buttonClick.addEventListener('click', onClick);
/* buttonAlert.addEventListener('click', onAlert); */
buttonAlert.onclick = onAlert;