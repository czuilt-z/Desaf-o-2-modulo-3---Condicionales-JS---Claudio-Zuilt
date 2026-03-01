AgregarBorde()



function AgregarBorde() {

    let imagenMOD1 = document.querySelector("#Cont-IMG");

    if (imagenMOD1.style.border == "100px solid green") {
        imagenMOD1.style.border = "none";
    } else {
        imagenMOD1.style.border = "100px solid green";
    }
    }  