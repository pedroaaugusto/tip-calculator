const valor = document.querySelector("#valor")
const porcentagemBotao = document.querySelectorAll("#porcento")
const porcentagem = document.querySelector("#porcento-customizado")
const pessoas = document.querySelector("#pessoas")

function digitarValor()
{
    valor.addEventListener('input', (evtValor) => {
        const valueValor = evtValor.target.value
        console.log(valueValor)
    })
}

function clickPorcentagem()
{
    porcentagemBotao.forEach(input => {
        input.addEventListener('click', () => {
            const valuePorcentagem = input.value
            const numeroPorcentagem = valuePorcentagem.replace(/[^0-9]/g, "")
            porcentagem.value = ""
            console.log(numeroPorcentagem)
        }) 
    })
}

function digitarPorcentagem()
{
    porcentagem.addEventListener('input', (evtPorcentagem) => {
        const valuePorcentagem = evtPorcentagem.target.value
        valuePorcentagem = ""
        console.log(valuePorcentagem)
    })
}

function digitarPessoas()
{
    pessoas.addEventListener('input', (evtPessoas) => {
    const valuePessoas = evtPessoas.target.value
    console.log(valuePessoas)
    })
}
