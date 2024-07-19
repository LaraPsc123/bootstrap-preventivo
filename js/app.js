// PRENDERE DAL DOM IL FORM
const formElement = document.getElementById('form')
console.log(formElement)

// EVITARE L'EVENTO INVIO
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit')
})

// PRENDO DAL DOM IL NOME
const nomeElement = document.querySelector('input[type="nome"]')
console.log(nomeElement)





// PRENDO DAL DOM IL COGNOME
const cognomeElement = document.getElementById('cognome')

// PRENDO L'EMAIL
const emailInputElement = document.getElementById('email')



