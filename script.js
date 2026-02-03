/*

document => Documento HTML

getElementById => Seleciona UM elemento pelo id
getElementsByClassName => Trás TODOS os elementos com uma classe
getElementByTagName => Trás TODOS os elementos com essa TAG
getElementByName => Trás TODOS os elementos com esse NAME

querrySelector => Trás UM elemento, o primeiro que encontrar
querrySelectorAll => Trás TODOS os elementos que encontrar



*/



// -----------------------------------------------------------------



// const element = document.querySelector("#main-input")

// element.placeholder = "O que vamos fazer hoje?"
// console.log(element.placeholder);

// element.value = 13092002
// console.log(element.placeholder);



// -----------------------------------------------------------------



// const element = document.querySelector(".paragraph-js")

// element.textContent = "Novo texto"
// element.innerText = "Novo texto"
// element.innerHTML = "Novo <b>Texto</b>"

// console.log(element.textContent)  SÓ HTML (IGNORA TAGS E CSS)
// console.log(element.innerText)  LEVA EM CONTA O CSS

// console.log(element.innerHTML)  TRÁS TUDO (ATÉ AS TAGS) -> PERMITE ADICIONAR TAG HTML



// -----------------------------------------------------------------



// const button = document.querySelector(".main-button")

// button.style.color = "black"
// button.style.backgroundColor = "purple"



// -----------------------------------------------------------------



// Exercício

// const input = document.querySelector("#main-input")
// const paragraphs = document.querySelector(".paragraph-js")

// function cliqueiNoBotao() {
//     input.value = "Seja bem-vindo!"
//     paragraphs.innerHTML += `<br><br> Olá, ${input.value}`
// }



// -----------------------------------------------------------------


// const input = document.querySelector("#main-input")
// const button = document.querySelector(".main-button")
// const select = document.querySelector("select")

// function mudarValor(event) {
//     console.log(event)
// }

// input.addEventListener("keypress", mudarValor)



// -----------------------------------------------------------------

const inputCurrency = document.querySelector(".input-currency")
const buttonConvert = document.querySelector(".convert-button")
const changeCurrency = document.querySelector("#change-currency")

const logo = document.querySelector(".american-logo")

const brasilLogo = document.querySelector(".brasil-logo")
const currencyReal = document.querySelector(".currencyReal")
const currencyToConvert = document.querySelector(".currency-value-to-convert")

const currency = document.querySelector(".currency")
const currencyValue = document.querySelector(".currency-value")
const optionConvert = document.getElementById("option-convert-from")
const dolarValue = 5.20
const euroValue = 6.20

function changeCurrencyValue() {

    if (optionConvert.value == "real" && changeCurrency.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency.value / dolarValue)


    } else if (optionConvert.value == "real" && changeCurrency.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency.value / euroValue)


    } else if (optionConvert.value == "dolar" && changeCurrency.value == "real") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value * dolarValue)


    } else if (optionConvert.value == "dolar" && changeCurrency.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrency.value * dolarValue) / euroValue)


    } else if (optionConvert.value == "euro" && changeCurrency.value == "real") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency.value * euroValue)


    } else if (optionConvert.value == "euro" && changeCurrency.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency.value)

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrency.value * euroValue) / dolarValue)
    }

}



function convertToCurrency() {

    if (optionConvert.value == "real") {
        brasilLogo.src = "./assets/brazil-.png"
        currencyReal.innerHTML = "Real Brasileiro"
        currencyToConvert.innerHTML = "R$ 0,00"
    } else if (optionConvert.value == "dolar") {
        brasilLogo.src = "./assets/united-states.png"
        currencyReal.innerHTML = "Dólar Americano"
        currencyToConvert.innerHTML = "US$ 0,00"
    } else if (optionConvert.value == "euro") {
        brasilLogo.src = "./assets/euro.png"
        currencyReal.innerHTML = "Euro"
        currencyToConvert.innerHTML = "€ 0,00"
    }


    if (changeCurrency.value == "dolar") {
        logo.src = "./assets/united-states.png"
        currency.innerHTML = "Dólar Americano"
        currencyValue.innerHTML = "US$ 0,00"

    } else if (changeCurrency.value == "euro") {
        logo.src = "./assets/euro.png"
        currency.innerHTML = "Euro"
        currencyValue.innerHTML = "€ 0,00"
    } else if (changeCurrency.value == "real") {
        logo.src = "./assets/brazil-.png"
        currency.innerHTML = "Real Brasileiro"
        currencyValue.innerHTML = "R$ 0,00"
    }


}



buttonConvert.addEventListener("click", changeCurrencyValue)
changeCurrency.addEventListener("change", convertToCurrency)
optionConvert.addEventListener("change", convertToCurrency)





