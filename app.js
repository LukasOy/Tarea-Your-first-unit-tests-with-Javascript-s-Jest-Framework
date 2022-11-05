function sum(a,b) {
    return a + b
}



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar(euro){
    let dollar = oneEuroIs.USD*euro
    return dollar
}


function fromDollarToYen(dollar){
    let yen = oneEuroIs.JPY*(oneEuroIs.USD/dollar)
    return yen
console.log(fromDollarToYen(10))
}
function fromYenToPound(yen){
    let Pound = oneEuroIs.GBP*(oneEuroIs.JPY*(oneEuroIs.USD/yen))
    return Pound
}


module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound};