function boasVindas() {
    alert("Bem-vindo ao site!")
}

function calcular() {
    console.log("Apertou")

    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))

    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2

    document.write("Soma: " + soma + "<br>")
    document.write("Subtração: " + subtracao + "<br>")
    document.write("Multiplicação: " + multiplicacao + "<br>")
    document.write("Divisão: " + divisao + "<br>")

    console.log("Soma: " + soma)
    console.log("Subtração: " + subtracao)
    console.log("Multiplicação: " + multiplicacao)
    console.log("Divisão: " + divisao)
}