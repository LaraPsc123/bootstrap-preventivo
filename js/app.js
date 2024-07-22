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
const codicePromElement = document.getElementById("codice-promozionale")
const priceElement = document.getElementById("finalprice")
console.log(nomeElement, cognomeElement, emailInputElement, tipoLavoroElement)

// EVITARE L'EVENTO INVIO
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit', event)

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
    // PREZZO BASE : NUM. ORE PER PREZZO ORARIO
    const oreLavoro = 10 // number
    const prezzoOrarioBackend = 20.50 // number
    const prezzoOrarioFrontend = 15.30 // number
    const prezzoOrarioProgettuale = 33.60 // number

    // CALCOLO
    let prezzoBaseBackend = oreLavoro * prezzoOrarioBackend
    prezzoBaseBackend = prezzoBaseBackend.toFixed(2)
    let prezzoBaseFrontend = oreLavoro * prezzoOrarioFrontend
    prezzoBaseFrontend = prezzoBaseFrontend.toFixed(2)
    let prezzoBaseProgettuale = oreLavoro * prezzoOrarioProgettuale
    prezzoBaseProgettuale = prezzoBaseProgettuale.toFixed(2)
    // console.log(prezzoBaseBackend, prezzoBaseFrontend, prezzoBaseProgettuale)

    // SE seleziona sviluppo backend
    if (selectLavoro == "") {
        selectLavoroElement.classList.add("is-invalid")
    } else if (selectLavoro == "1") {
        priceElement.innerHTML = prezzoBaseBackend + "\u20AC"
    } else if (selectLavoro == "2") {
        priceElement.innerHTML = prezzoBaseFrontend + "\u20AC"
    } else if (selectLavoro == "3") {
        priceElement.innerHTML = prezzoBaseProgettuale + "\u20AC"
    }

    const codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
    let codice = codicePromElement.value
    // dichiaro la variabile sconto
    let sconto = 0

    // SE il codice sconto è valido
    // -- allora devo calcolare lo sconto
    if (codiciSconto.includes(codice) && selectLavoro == "1") {
        codicePromElement.classList.add("is-valid")
        sconto = prezzoBaseBackend * 0.25
        let prezzoFinaleBackend = prezzoBaseBackend - sconto
        priceElement.innerHTML = prezzoFinaleBackend + "\u20AC"
    } else if (codiciSconto.includes(codice) && selectLavoro == "2") {
        codicePromElement.classList.add("is-valid")
        sconto = prezzoBaseFrontend * 0.25
        let prezzoFinaleFrontend = prezzoBaseFrontend - sconto
        priceElement.innerHTML = prezzoFinaleFrontend + "\u20AC"
    } else if (codiciSconto.includes(codice) && selectLavoro == "3") {
        codicePromElement.classList.add("is-valid")
        sconto = prezzoBaseProgettuale * 0.25
        let prezzoFinaleProgettuale = prezzoBaseProgettuale - sconto
        priceElement.innerHTML = prezzoFinaleProgettuale + "\u20AC"
    } else if (!codiciSconto.includes(codice)) {
        codicePromElement.classList.add("is-invalid")
    }

})
















