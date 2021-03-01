function updateTime() {
    let timeElement = document.getElementById('time');
    let date = new Date();

    let red = date.getHours();
    let green = date.getMinutes();
    let blue = date.getSeconds();

    let hexString = getHexString(red, green, blue);

    timeElement.textContent = hexString;
    timeElement.style.color = getInvertedHexString(red, green, blue);
    document.body.style.backgroundColor = hexString;
}

function getTwoDigitString(number) {
    return ('0' + number).slice(-2);
}

function getHexString(red, green, blue) {
    return `#${getTwoDigitString(red)}${getTwoDigitString(green)}${getTwoDigitString(blue)}`;
}

function getInvertedColor(color) {
    return (255 - parseInt(color, 16)).toString(16);
}

function getInvertedHexString(red, green, blue) {
    return getHexString(getInvertedColor(red), getInvertedColor(green), getInvertedColor(blue));
}

window.addEventListener('load', () => {
    document.getElementById('time').className = "";
    setInterval(updateTime, 10);
});
