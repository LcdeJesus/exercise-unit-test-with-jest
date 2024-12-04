// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
function fromDollarToYen(valueInDollar) {
    const conversionRate = 1.07 * 156.5;
    const valueInYen = valueInDollar * conversionRate;
    return parseFloat(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInYen) {
    const conversionRate = 0.87;
    const valueInPound = valueInYen * (1 / 156.5) * conversionRate; 
    return parseFloat(valueInPound.toFixed(2))
}
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}