const titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.textContent = "JavaScript alterou este titulo"

const descricao = document.getElementById("descricao")
console.log(descricao.textContent)
descricao.textContent = "O conteúdo foi alterado pelo DOM"

const titulo1 = document.querySelector("#titulo")
console.log(titulo1)

const mensagem = document.querySelector(".mensagem")
console.log(mensagem)

const botao = document.querySelector("button")

const mensagens = document.querySelectorAll(".mensagem")

for(let cont = 0; cont < mensagens.length; cont++){
    console.log(mensagens[cont].textContent)
}

// titulo.style.color = "blue"
// titulo.style.backgroundColor = "lightgray"
// titulo.style.padding = "20px"

// descricao.style.fontSize = "20px"

// console.log(mensagens)

// console.log(mensagens[0])
// console.log(mensagens[1])

// console.log(mensagens.length)

titulo.classList.add("destaque")

// titulo.classList.remove("destaque")

titulo.classList.toggle("destaque")

console.log(titulo.classList.contains("destaque"))

function mostrarMensagem() {
    // console.log("O botão foi clicado")
    titulo.textContent = "Botão clicado!"
}

function alternarDestaque(){

    titulo.classList.toggle("destaque");
}

function mostrarNome() {
    const inputNome = document.querySelector("#nome")
    const resultado = document.querySelector("#resultado")

    if(inputNome.value === "") {
        resultado.textContent = "Digite um nome."
    } else {
        resultado.textContent = `Olá, ${inputNome.value}!`
    }
    // resultado.textContent = `Olá, ${inputNome.value}!`
}