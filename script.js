"use strict";
exports.__esModule = true;
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    // let tallestMountain:Mountain = mountains[0];
    // mountains.forEach((m:Mountain) => {
    //     if(m.height > tallestMountain.height){
    //         tallestMountain = m;
    //     }
    // });
    var tallestMountain = mountains.reduce(function (prev, current) { return (prev.height > current.height) ? prev : current; });
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);
var products = [
    {
        name: "diapers",
        price: 30
    },
    {
        name: "baby food",
        price: 1
    },
    {
        name: "baby wipes",
        price: 20
    },
    {
        name: "stoller",
        price: 150
    },
    {
        name: "carrier",
        price: 30
    },
    {
        name: "baby clothes",
        price: 10
    }
];
function calcAverageProductPrice(products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total / products.length;
    // let sum:number = products.reduce((first, second) => (first.price + second.price));
    // return sum/products.length;
}
;
console.log(calcAverageProductPrice(products).toFixed(2));
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var i = 0; i < inventory.length; i++) {
        total += inventory[i].product.price * inventory[i].quantity;
    }
    return total;
}
;
console.log(calcInventoryValue(inventory));
