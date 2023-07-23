function tempConverter(valNum) {
    valNum = parseFloat(valNum)
    valNum = Math.floor(valNum)
    document.getElementById('outputFahrenheit').innerHTML=valNum * 9 / 5 + 32;
}