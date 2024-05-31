
function main() {
    const inputEmail = document.querySelector("#email");
    const inputNombre = document.querySelector("#nombre");

    const spanTexto = document.querySelector("#texto");

    const h1Titulo = document.querySelector("h1");

    console.log(inputEmail.value);
    console.log(inputNombre.value);

    console.log(spanTexto);
    spanTexto.innerHTML = `
        Hola ${inputNombre.value} - email: ${inputEmail.value}
    `
    spanTexto.style.color = "red";
    spanTexto.style.backgroundColor = "white"
    spanTexto.style.border = "2px solid black";
    h1Titulo.style.color = `rgb( ${Math.floor(Math.random()* 256)},  ${Math.floor(Math.random()* 256)},  ${Math.floor(Math.random()* 256)})`

    document.querySelector("body").style.backgroundColor = `rgb( ${Math.floor(Math.random()* 256)},  ${Math.floor(Math.random()* 256)},  ${Math.floor(Math.random()* 256)})`
}


