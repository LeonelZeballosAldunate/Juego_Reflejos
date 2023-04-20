var inicio = new Date().getTime();
var bestTime = 86400;

function aparecerForma () {
    var top = Math.random()*80;
    var left = Math.random()*80;
    var width = (Math.random()*200)+100;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var borderRadius = ["50%", "0%"];
    var randomPositionArrayBorder = Math.floor(Math.random()*2);
    
    document.getElementById("forma").style.display = "block";
    document.getElementById("forma").style.top = top + "%";
    document.getElementById("forma").style.left = left + "%";
    document.getElementById("forma").style.borderRadius = borderRadius[randomPositionArrayBorder];
    document.getElementById("forma").style.width = width + "px";
    document.getElementById("forma").style.height = width + "px";
    document.getElementById("forma").style.background = "#" + randomColor;

    inicio = new Date().getTime();
}

function aparecerFormaDespuesDeRetraso () {
    setTimeout(aparecerForma, (Math.random()*3000)+500);
}

document.getElementById("forma").onclick = function () {

    document.getElementById("forma").style.display = "none";
    var fin = new Date().getTime();
    var diferencia = (fin-inicio)/1000;

    if (diferencia < bestTime) {
        bestTime = diferencia;
    }

    document.getElementById("tiempoReaccion").innerHTML = diferencia + " segundos";
    document.getElementById("bestTime").innerHTML = bestTime + " s";

    aparecerFormaDespuesDeRetraso();
}