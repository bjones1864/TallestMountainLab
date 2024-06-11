"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function findNameOfTallestMountain(m) {
    return m.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; }).name;
}
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
var products = [
    {
        name: "Snakeskin football",
        price: 1200
    },
    {
        name: "Gucci balaclava",
        price: 1000
    },
    {
        name: "Dog",
        price: 800
    }
];
function calcAverageProductPrice(p) {
    return (p.reduce(function (total, next) { return total + next.price; }, 0) / p.length);
}
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [
    {
        product: { name: "motor", price: 10 },
        quantity: 10
    },
    {
        product: { name: "sensor", price: 12.50 },
        quantity: 4
    },
    {
        product: { name: "LED", price: 1 },
        quantity: 20
    }
];
function calcInventoryValue(i) {
    return i.reduce(function (total, next) { return total + (next.product.price * next.quantity); }, 0);
}
var value = calcInventoryValue(inventory);
console.log(value);
