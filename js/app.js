// PRENDERE DAL DOM IL FORM
const formElement = document.getElementById('form')
console.log(formElement)

// EVITARE L'EVENTO INVIO
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    // console.log('submit')
})




