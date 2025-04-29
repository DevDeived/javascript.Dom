// Capturando elementos com Javascript

// // let titulo = document.getElementsByTagName("h1")
// // let titulo2 = document.getElementsByClassName("olaMundo")
// // let titulo3 = document.getElementById("olaMundo")
// // let titulo4 = document.querySelector("h1")
// // let titulo5 = document.querySelector(".classe")
// let titulo6 = document.querySelector("#olaMundo")
// let corpo = document.querySelector("body")

// //Escreve dentro das tags HTML InnerText.
// titulo6.innerText = "Olá Mundo!!"

// // Escreve tags e conteudos

// corpo.innerHTML += `
// <p class='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatum assumenda aliquam delectus quas maiores laborum dolor odit illum possimus.</p>`

// //Adicionar estilos
// let paragrafo = document.querySelector("p")
// paragrafo.classList.add("paragrafo")

// // Remover estilos

// paragrafo.classList.remove("paragrafo")

//Eventos

let titulo6 = document.querySelector("#olaMundo")
let corpo = document.querySelector("body")
let botao = document.querySelector("#botao")

function gerarTexto(){
    titulo6.innerText = "Olá Mundo!!"
    corpo.innerHTML += `
<p class='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatum assumenda aliquam delectus quas maiores laborum dolor odit illum possimus.</p>`
}
