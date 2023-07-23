function tempConverter(valNum) {
    valNum = parseFloat(valNum)
    document.getElementById('outputFahrenheit').innerHTML=Math.floor(valNum * 9 / 5 + 32);
}
