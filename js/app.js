console.log('richiesta preventivo')

// RECUPERARE L'INPUT DEL CLICK PER STAMPARE I VALORI DELLE CELLE
const buttonCalcolaElement = document.getElementById('calcola')
console.log(buttonCalcolaElement)
// CREARE L'EVENTO QUANDO CLICCO SU CALCOLA
buttonCalcolaElement.addEventListener('click', function () {
    console.log('richiesta preventivo') // STAMPA DEL VALORE DEL NOME DATO DALL'UTENTE
})


// PRENDERE DAL DOM IL FORM
const formElement = document.getElementById('form')
console.log(formElement)

const nomeElement = document.getElementById('nome')
const cognomeElement = document.getElementById('cognome')
const emailInputElement = document.getElementById('email')
const tipoLavoroElement = document.getElementById("tipo-lavoro")
const selectLavoroElement = document.getElementById("job")
console.log(nomeElement, cognomeElement, emailInputElement, tipoLavoroElement)

// EVITARE L'EVENTO INVIO
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit', event)
})

// RECUPERARE DALL'INPUT IL VALORE DEL NOME
const nome = nomeElement.value
console.log(nome)

// RECUPERARE DALL'INPUT IL VALORE DEL COGNOME
const cognome = cognomeElement.value
console.log(cognome)

// RECUPERARE IL VALORE DELLA SELECT
const selectLavoro = selectLavoroElement.value
console.log(selectLavoro)


// AMMONTARE DEL PREVENTIVO PER LE ORE DI LAVORO RICHIESTE
// PREZZO FINALE: NUM. ORE PER PREZZO ORARIO
// const oreLavoro = 10 // number
// const prezzoOrarioBackend = 20.50 // number
// const prezzoOrarioFrontend = 15.30 // number
// const prezzoOrarioProgettuale = 33.60 // number

// // CALCOLO
// let prezzoFinaleBackend = oreLavoro * prezzoOrarioBackend
// let prezzoFinaleFrontend = oreLavoro * prezzoOrarioFrontend
// let prezzoFinaleProgettuale = oreLavoro * prezzoOrarioProgettuale
// console.log(prezzoFinaleBackend, prezzoFinaleFrontend, prezzoFinaleProgettuale)









