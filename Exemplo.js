// alert('Olá mundo')
//
// var teste = prompt("Digite qualquer coisa")
//
// alert(teste)


function testTexto() {
    document.getElementById("titulo").innerHTML =+ "Boa Tarde"
}

function testColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "darkblue"
    titulo.style.fontSize = "48px"
}

function reset() {
    document.getElementById("titulo").innerHTML = "Bem-Vindo ao Nosso Site!"
}


function testInput() {
    document.getElementById("input").value = "Tarde"
}