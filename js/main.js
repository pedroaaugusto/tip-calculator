const valor = document.querySelector("#valor")
const porcentagemBotao = document.querySelectorAll("#porcento")
const porcentagem = document.querySelector("#porcento-customizado")
const pessoas = document.querySelector("#pessoas")
const recarregar = document.querySelector("#btn")
const spanGorjeta = document.querySelector("#spangorjeta")
const spanValor = document.querySelector("#spanvalor")
const spanAviso = document.querySelector("#aviso")
const paiGorjeta = document.querySelector(".box-tip")

let valueValor = 0.0
let valuePessoas = 1
let valuePorcentagem = 0.00
spanGorjeta.innerHTML = (0.0).toFixed(2);
spanValor.innerHTML = (0.0).toFixed(2);

//recebe valor da conta 
function digitarValor()
{
    valueValor = Number(valor.value)
    apareceErro(valueValor, valor)
    calculos(valuePorcentagem)
}

//recebe numero de pessoas p/ divisao
function digitarPessoas()
{
    valuePessoas = Number(pessoas.value)
    apareceErro(valuePessoas, pessoas)
    calculos(valuePorcentagem)
}

//recebe porcentagem de gorjeta por botao
function clickPorcentagem() 
{
    paiGorjeta.addEventListener('click', (e) => {
        const target = e.target
        const valuePorcentagem = Number(target.value.replace(/[^0-9]/g, "") / 100)
        porcentagem.value = ""
        calculos(valuePorcentagem)
    })
}

clickPorcentagem()

//recebe porcentagem de gorjeta por texto
function digitarPorcentagem()
{
    valuePorcentagem = Number((porcentagem.value) / 100)
    porcentagemBotao.value = ""
    apareceErro(valuePorcentagem, porcentagem)
    calculos(valuePorcentagem)
}

//calcula valor da gorjeta e valor do total por pessoa
function calculos(prct)
{
    if (valueValor >= 1) {
        let gorjeta = (valueValor * prct) / valuePessoas
        let valor = (valueValor + gorjeta) / valuePessoas
        console.log(gorjeta)
        spanGorjeta.innerHTML = gorjeta.toFixed(2)
        spanValor.innerHTML = valor.toFixed(2);
    } 
}

//recarrega pagina
function clickRecarregar()
{
    valor.value = ""
    porcentagemBotao.value = ""
    porcentagem.value = ""
    pessoas.value = ""
    spanGorjeta.innerHTML = (0.0).toFixed(2);
    spanValor.innerHTML = (0.0).toFixed(2);
    spanAviso.style.display = "none"
    valor.style.borderColor = "hsl(0, 0%, 100%)"
    porcentagem.style.borderColor = "hsl(0, 0%, 100%)"
    pessoas.style.borderColor = "hsl(0, 0%, 100%)"
}

//função erro
function apareceErro(value, input)
{
    if (value === 0) {
        spanAviso.style.display = "block"
        input.style.borderColor = "red"
        spanGorjeta.innerHTML = (0.0).toFixed(2);
        spanValor.innerHTML = (0.0).toFixed(2);
    } else {
        spanAviso.style.display = "none"
        input.style.borderColor = "hsl(0, 0%, 100%)"
    }
}