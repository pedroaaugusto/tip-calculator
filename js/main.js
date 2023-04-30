const valor = document.querySelector("#valor")
const porcentagemBotao = document.querySelectorAll("#porcento")
const porcentagem = document.querySelector("#porcento-customizado")
const pessoas = document.querySelector("#pessoas")
const spanGorjeta = document.querySelector("#spangorjeta")
const spanValor = document.querySelector("#spanvalor")

let valueValor = 0.0
let valuePessoas = 1
let valuePorcentagem = 0.15
spanGorjeta.innerHTML = (0.0).toFixed(2);
spanValor.innerHTML = (0.0).toFixed(2);

//recebe valor da conta 
function digitarValor()
{
    valueValor = Number(valor.value)
    calculos()
}

//recebe numero de pessoas p/ divisao
function digitarPessoas()
{
    valuePessoas = Number(pessoas.value)
    calculos()
}

//recebe porcentagem de gorjeta por botao
function clickPorcentagem()
{
    porcentagemBotao.forEach(input => {
        input.addEventListener('click', () => {
            valuePorcentagem = Number((input.value.replace(/[^0-9]/g, "")) / 100)
            porcentagem.value = ""
            calculos()
        }) 
    })
}

//recebe porcentagem de gorjeta por texto
function digitarPorcentagem()
{
    valuePorcentagem = Number((porcentagem.value) / 100)
    porcentagemBotao.value = ""
    calculos()
}

//calcula valor da gorjeta e valor do total por pessoa
function calculos()
{
    if (valueValor >= 1) {
        let gorjeta = (valueValor * valuePorcentagem) / valuePessoas
        let valor = (valueValor + gorjeta) / valuePessoas
        console.log(gorjeta)
        spanGorjeta.innerHTML = gorjeta.toFixed(2)
        spanValor.innerHTML = valor.toFixed(2);
    } 
}
