function tempConverter(valNum) {
    valNum = parseFloat(valNum)
    document.getElementById('outputFahrenheit').innerHTML=Math.floor(valNum * 9 / 5 + 32);
    document.getElementById('outputKelvin').innerHTML=Math.floor(valNum + 273.15)
}
