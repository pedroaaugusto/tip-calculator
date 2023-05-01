# Tip-calculator

Calcule a porcentagem de gorjeta de um valor e divida entre um número determinado de pessoas de forma simples e ágil.

## Objetivo

O objetivo deste projeto foi achar uma solução para um desafio do Front-end Mentor <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX">Tip calculator app</a> onde crio uma calculadora de gorjeta, tendo em mente principalmente aprimorar habilidades em JavaScript, validação de formulários, responsividade.

## Acesse

<a href="https://dancing-cactus-ca52c8.netlify.app">Calculadora de gorjeta</a>

## Tabela de conteúdo 

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construido com](#construído-com)
  - [Features](#features)
  - [Próximos passos](#próximos-passos)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Status do projeto](#status-do-projeto)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Licença](#licença)

## Visão geral

### O desafio

Funcionalidades:

- Veja o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Calcule a gorjeta correta e o custo total da conta por pessoa

### Capturas de tela

### Capturas de tela - interface desejada 

#### layout mobile (375px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 -->
      <a href="link_da_imagem1"><img src="https://user-images.githubusercontent.com/115605744/235394307-3fe615ab-d5f4-4af3-8af2-1ac31c495358.jpg" alt="layout mobile"></a>
    </td>
</table>

#### layout desktop (1440px) <br>

![desktop-design-empty](https://user-images.githubusercontent.com/115605744/235394126-b51e5c1e-369e-41af-8b67-cf1be43cd3e8.jpg)

#### layout active desktop (1440px) <br>

![active-states](https://user-images.githubusercontent.com/115605744/235394153-ece65439-2de1-4951-9441-79d2b109c62d.jpg)

![desktop-design-completed](https://user-images.githubusercontent.com/115605744/235394161-fc6a641d-6683-4273-a246-077cc341240a.jpg)

### Capturas de tela - interface obtida 

#### layout mobile (375px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 -->
      <a href="link_da_imagem1"><img src="https://user-images.githubusercontent.com/115605744/235395288-c98e3bb1-b9fa-45a3-ac00-ceb86d2c57a9.png" alt="layout mobile estático"></a>
    </td>
    <td>
      <!-- coluna 2 -->
      <a href="link_da_imagem2"><img src="https://user-images.githubusercontent.com/115605744/235395867-92ebb5d3-b0cb-4184-86db-6c31b3fa3d91.png" alt="layout mobile erro"></a>
    </td>
    <td>
      <!-- coluna 3 -->
      <a href="link_da_imagem3"><img src="https://user-images.githubusercontent.com/115605744/235395336-1aed3125-c685-4a82-8b2b-8ae518b50549.png" alt="layout mobile ativo"></a>
    </td>
  </tr>
</table>

#### layout desktop (1440px) <br>

![tipdesk1](https://user-images.githubusercontent.com/115605744/235395464-e293990d-002f-4f56-9af6-97919915f02a.png)

#### layout active desktop (1440px) <br>

![tipdesk2](https://user-images.githubusercontent.com/115605744/235396141-e73253af-c8cb-43b9-814a-4a7d02613e48.png)

![tipdesk3](https://user-images.githubusercontent.com/115605744/235395576-aaf8fb4d-6c24-4a0e-9448-01c3743a2853.png)

### Links

- URL da solução: [GitHub](https://github.com/pedroaaugusto/tip-calculator)
- URL do site: [Site](https://dancing-cactus-ca52c8.netlify.app)

## Meu processo

### Construído com:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Features

:hammer_and_wrench: Cálculo de gorjeta com base em uma porcentagem escolhida pelo usuário ; <br>
:iphone: Validação dos dados inseridos pelo usuário para garantir que sejam números válidos ; <br>
:fountain_pen: Atualização automática ; <br>
:currency_exchange: Opção de recarregamento de página ;

## Próximos passos 
#### (Completo)

- [X] Criar Html
- [X] Estilizar página com css e utilizando tambem variaveis
- [X] Criar um foco em todos os elementos interativos da página
- [X] Criar lógica por tras dos calculos
- [X] Fazer com que o resultado seja atualizado assim que o usuario troca alguma informação
- [X] Permitir que usuário recarregue a página atravez de um botão

### Tecnologias utilizadas

- Arquitetura de Software
- Unidades relativas
- JavaScript
- Convencional Commits
- FlexBox
- Var CSS

### O que aprendi

#### Aprendi a declarar eventos inline usando on'evento'="função" ;
```html
<div class="box-tip">
    <label for="porcento-customizado">Gorjeta %</label>                   
    <input class="input-porcento" id="porcento" type="button" min="1" value="5%"  onclick="clickPorcentagem()">
    <input class="input-porcento" id="porcento" type="button" min="1" value="10%" onclick="clickPorcentagem()">
    <input class="input-porcento" id="porcento" type="button" min="1" value="15%" onclick="clickPorcentagem()">
    <input class="input-porcento" id="porcento" type="button" min="1" value="25%" onclick="clickPorcentagem()">
    <input class="input-porcento" id="porcento" type="button" min="1" value="50%" onclick="clickPorcentagem()">
    <input class="input-porcento-customizado" id="porcento-customizado" type="number" min="1" placeholder="Customizado" oninput="digitarPorcentagem()">
</div>
```

#### Aprendi a declarar eventos no JS, chamando o evento e a função que é executada quando o evento é escutado ;

```js
const valor = document.querySelector("#valor")

valor.addEventListner('input', digitarValor)

//recebe valor da conta 
function digitarValor()
{
    valueValor = Number(valor.value)
    apareceErro(valueValor, valor)
    calculos()
}
```

#### Aprendi a substituir tudo que não é numero dentro de uma string com replace() no caso ela primeir busca qualquer numero que não esteja (^) entre 0 e 9 (0-9) e substitui por um string vazia ("") ;

```js
valuePorcentagem = Number((input.value.replace(/[^0-9]/g, "")) / 100)
```

### Status do projeto

Finalizado. Aguardando melhorias.

### Recursos úteis

- [Curso sobre JavaScript](https://www.cursoemvideo.com/curso/javascript/) - Curso com ótima didática para quem busca dar os primeiros passos em JavaScript.
- [Escopo JavaScript](https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba) - Site ótimo para entender como funciona o escopo no JavaScript.
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) - Ótimo conteúdo sobre Conventional Commits, importantíssimo para lógica de commits ajuda a melhorar a qualidade do código-fonte, tornando as alterações mais fáceis de entender e rastrear.
- [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Ótimo conteúdo sobre FlexBox.

## Autor

- GitHub - [Pedro Alves](https://github.com/pedroaaugusto)
- LinkedIn - [Pedro Alves](https://www.linkedin.com/in/pedroaalves)

## Licença

![GitHub](https://img.shields.io/github/license/pedroaaugusto/age-calculator?style=plastic)
