function updateTime() {
    let timeElement = document.getElementById('time');
    let date = new Date();
    let hexCode = `#${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

    timeElement.innerText = hexCode;
    timeElement.style.color = invertColor(hexCode);
    document.body.style.backgroundColor = hexCode;
}

function invertColor(hexCode) {
    let red = 255 - parseInt(hexCode.substring(1, 3));
    let green = 255 - parseInt(hexCode.substring(3, 5));
    let blue = 255 - parseInt(hexCode.substring(5, 7));

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

window.addEventListener('load', () => {
    document.getElementById('time').className = "";
    setInterval(updateTime, 10);
});