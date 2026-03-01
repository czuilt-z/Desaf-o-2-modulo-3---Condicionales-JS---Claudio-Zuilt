

function calcularStickers() {

    let cantidad1 = Number(document.querySelector("#Input-IMG1").value);
    let cantidad2 = Number(document.querySelector("#Input-IMG2").value);
    let cantidad3 = Number(document.querySelector("#Input-IMG3").value);
    let cantidadStickers = parseInt(cantidad1) + parseInt(cantidad2) + parseInt(cantidad3);
    let mensaje = "";

    if (cantidadStickers < 0 || isNaN(cantidadStickers)) {

        mensaje = "Por favor, ingresa un número válido de stickers.";
        // alert("Por favor, ingresa un número válido de stickers.");
    }
    else if (cantidadStickers === 0) {
        mensaje = "No has comprado ningún sticker.";
        // alert("No has comprado ningún sticker.");
    }
    else if (cantidadStickers <= 10) {
        mensaje = "¡Felicidades! Has comprado " + cantidadStickers + " stickers.";
        // alert("¡Felicidades! Has comprado" + cantidadStickers + " stickers:");
    } else {
        mensaje = "Llevas demasiados stickers: " + cantidadStickers + ".";
        // alert("Llevas demasiados stickers:");
    }

    document.querySelector("#Resultado").textContent = mensaje;
}