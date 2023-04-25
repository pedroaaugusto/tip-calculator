const valor = document.querySelector("#valor")
const porcentagemBotao = document.querySelector("#porcento")
const porcentagem = document.querySelector("#porcento-customizado")
const pessoas = document.querySelector("#pessoas")


valor.addEventListener('input', (evtValor) => {
    const valueValor = evtValor.target.value
    console.log(valueValor)
})

// porcentagemBotao.addEventListener('click', () => {
//     const valuePorcentagem = porcentagemBotao.value
//     porcentagem = 0
//     console.log(valuePorcentagem)
//     console.log(porcentagem)
// }) 

// porcentagemBotao.forEach((input) => {
//     input.addEventListener('click', () => {
//         const valuePorcentagem = porcentagemBotao.value
//         porcentagem = 0
//         console.log(valuePorcentagem)
//         console.log(porcentagem)
//     }) 
// });

porcentagem.addEventListener('input', (evtPorcentagem) => {
        const valuePorcentagem = evtPorcentagem.target.value
        console.log(valuePorcentagem)
})

pessoas.addEventListener('input', (evtPessoas) => {
    const valuePessoas = evtPessoas.target.value
    console.log(valuePessoas)
})



