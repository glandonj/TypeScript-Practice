export {}

//Mountain Exercise - 1
interface Mountain{
    name:string;
    height:number;
}

let mountains:Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name:"Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];

function findNameOfTallestMountain(mountains:Mountain[]):string{
    // let tallestMountain:Mountain = mountains[0];
    // mountains.forEach((m:Mountain) => {
    //     if(m.height > tallestMountain.height){
    //         tallestMountain = m;
    //     }
    // });
    let tallestMountain:Mountain = mountains.reduce((prev, current) => (prev.height > current.height)? prev: current);
    return tallestMountain.name;
}

let mountainName:string = findNameOfTallestMountain(mountains);
console.log(mountainName);


//Product Exercise - 2
interface Product{
    name:string;
    price:number;
}

let products:Product[] = [
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

function calcAverageProductPrice(products:Product[]):number{
    let total:number = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price;
    }
    
    return total/products.length;
    // let sum:number = products.reduce((first, second) => (first.price + second.price));
    // return sum/products.length;
};
console.log(calcAverageProductPrice(products).toFixed(2));

//Inventory Exercise - 3

interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[]=[
    {
        product:{
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product:{
            name:"sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product:{
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];

function calcInventoryValue(inventory:InventoryItem[]):number{
    let total:number = 0;
    for(let i = 0; i < inventory.length; i++){
        total += inventory[i].product.price*inventory[i].quantity;
    }
    
    return total;
};
console.log(calcInventoryValue(inventory));
