const IMG_1 = "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?im=Resize=(680)";


function main() {
    const body = document.querySelector("body");
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
    h1Titulo.style.color = generarColorAleatorio();

    body.style.backgroundColor = generarColorAleatorio();

    body.innerHTML += `<p> Titulo creado con js</p>`;

    fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(res => res.json()).then(
        generarHtmlPokemon
    )
}

function generarHtmlPokemon(info) {
    const body = document.querySelector("body");
    console.log(info.species.name);
    body.innerHTML += `<p> ${info.species.name}</p>`;
    body.innerHTML += `<img src="${info.sprites.front_default}" alt=${info.species.name}>`;
}

/**
 * Genera un color aleatorio
 * @returns el color aleatorio generado
 */
function generarColorAleatorio() {
    let colorRojo = generaCodigoColorAleatorio();
    let colorVerde = generaCodigoColorAleatorio();
    let colorAzul = generaCodigoColorAleatorio();
    return `rgb( ${colorRojo},  ${colorVerde},  ${colorAzul})`;
}

/**
 * Genera un codigo color aleatorio
 * @returns codigo del color aleatorio generado
 */
function generaCodigoColorAleatorio() {
    return Math.floor(Math.random() * 256);
}

