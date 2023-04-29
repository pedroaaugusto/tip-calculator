const valor = document.querySelector("#valor")
const porcentagemBotao = document.querySelectorAll("#porcento")
const porcentagem = document.querySelector("#porcento-customizado")
const pessoas = document.querySelector("#pessoas")


//recebe valor da conta 
function digitarValor()
{
    var valueValor = valor.value
    console.log(valueValor)
    return valueValor
}

//recebe porcentagem de gorjeta por botao
function clickPorcentagem()
{
    porcentagemBotao.forEach(input => {
        input.addEventListener('click', () => {
            var valuePorcentagem = (input.value.replace(/[^0-9]/g, "")) / 100
            porcentagem.value = ""
            console.log(valuePorcentagem)
            return valuePorcentagem
        }) 
    })
}

//recebe porcentagem de gorjeta por texto
function digitarPorcentagem()
{

    var valuePorcentagem = (porcentagem.value) / 100
    porcentagemBotao.value = ""
    console.log(valuePorcentagem)
    return valuePorcentagem
    
}

//recebe numero de pessoas p/ divisao
function digitarPessoas()
{
    var valuePessoas = pessoas.value
    console.log(valuePessoas)
    return valuePessoas
}
