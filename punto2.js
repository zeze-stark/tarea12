
    function getRandom (){
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    document.getElementById('number').innerHTML = 'EL numero random generado es' + getRandomIntInclusive (parseInt(min), parseInt(max));
}

function getRandomIntInclusive(max, min){
return Math.floor(Math.random() * (max - min + 1)) + min;

 }

