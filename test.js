/*const { sum } = require("./app.js");

test ("adds 14 + 9 to equal 23", function() {

    let total = sum(14, 9);

    expect(total).toBe(23);
} )
*/

const {fromEuroToDollar, fromDollarToYen} = require("./app.js");

test("Tienes 10 euros y te tiene que dar 12 Dolares", function(){

    let dolarillos = fromEuroToDollar(10);

    expect(dolarillos).toBe(12);

})

test("Tienes 10 dolares y te tiene que dar 1061 yen", function(){

    let yen = fromDollarToYen(10);

    expect(yen).toBe(1061)
})