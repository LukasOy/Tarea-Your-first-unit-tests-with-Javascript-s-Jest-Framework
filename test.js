/*const { sum } = require("./app.js");

test ("adds 14 + 9 to equal 23", function() {

    let total = sum(14, 9);

    expect(total).toBe(23);
} )
*/

const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require("./app.js");

test("Tienes 10 euros y te tiene que dar 12 Dolares", function(){

    let dolarillos = fromEuroToDollar(10);

    expect(dolarillos).toBe(12);

})

test("Tienes 5 dolares y te tiene que dar 767.4000000000001 yen", function(){

    let yen = fromDollarToYen(5);

    expect(yen).toBe(767.4000000000001);
})

test("Tienes 1000 yenes y el cambio es 6 libras", function(){

    let libras = fromYenToPound(1000);

    expect(libras).toBe(1000);
})