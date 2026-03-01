


function VerificarCodigo() {

    Contra1 = 714;
    Contra2 = 911;

    var Codigo1 = document.querySelector("#Codigo1").value;
    var Codigo2 = document.querySelector("#Codigo2").value;
    var Codigo3 = document.querySelector("#Codigo3").value;

    // var Resultado = parseInt(Codigo1) + parseInt(Codigo2) + parseInt(Codigo3);
    var Resultado = Codigo1 + Codigo2 + Codigo3;



    if (Resultado == Contra1 || Resultado == Contra2) {
        document.querySelector("#Mensaje").textContent = "¡Código Correcto!";
        document.getElementById("candado").src = "assets/img/01CandadosAbierto.png";
    } else {
        document.getElementById("Mensaje").innerHTML = "Código Incorrecto";
    }

    document.querySelector("#MensajeResultado").textContent = Resultado;

}

