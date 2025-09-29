
const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = function(valueInDollar) {
 
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}


const fromYenToPound = function(valueInYen) {
   
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }