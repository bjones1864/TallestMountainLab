export {}

interface Mountain{
    name: string;
    height: number;
}

let mountains: Mountain[] = [
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

function findNameOfTallestMountain(m : Mountain[]): string {
    return m.reduce((prev, current) => (current.height > prev.height) ? current : prev).name;
}

let tallest: string = findNameOfTallestMountain(mountains);
console.log(tallest);

interface Product{
    name: string;
    price: number;
}

let products: Product[] = [
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

function calcAverageProductPrice(p: Product[]): number {
    return (p.reduce((total, next) => total + next.price, 0) / p.length)
}

let avgPrice: number = calcAverageProductPrice(products);
console.log(avgPrice);

interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {
        product: { name: "motor", price: 10},
        quantity: 10
    },
    {
        product: { name: "sensor", price: 12.50},
        quantity: 4
    },
    {
        product: { name: "LED", price: 1},
        quantity: 20
    }
];

function calcInventoryValue(i: InventoryItem[]): number {
    return i.reduce((total, next) => total + (next.product.price * next.quantity), 0);
}

let value: number = calcInventoryValue(inventory);
console.log(value);