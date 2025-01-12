type Pizza = {
    id: number;
    name: string;
    price: number;
}

type Order {
    id: number;
    pizzaName: string;
    status: "orderded" | "completed";
}
const menu:Pizza[] =[
    {id:0,name:"margarita", price: 5},
    {id:1,name:"Olives", price: 7},
    {id:2,name:"vegetarian", price: 6},
    {id:3,name:"mushrooms", price: 8},
]

let nextOrderId=0;
let cashInRegister = 100;

const orderQue: Order[] = [];

function addNewPizza(pizzaObj:Pizza):void{
    menu.push(pizzaObj)
}

function placeOrder(namePizza:string):Order | undefined{
    const pizza = menu.find(pizza => pizza.name === namePizza)
    if (!pizza) {
        throw new Error(`Pizza with name ${namePizza} not found`);
    }
    cashInRegister += pizza.price;
    const newOrder:Order ={
        id:nextOrderId++,
        pizzaName: pizza.name,
        status:"orderded"
    }
    orderQue.push(newOrder)
    return newOrder
}

function completedOrder(orderId:number):Order | undefined{
    const order = orderQue.find(order => order.id === orderId)
    if (!order) {
        throw new Error(`Pizza with id ${orderId} not found`);
    }
    order.status = "completed"
    return order
}


export function getPizzaDetails(identifier: string|number):Pizza|undefined{
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }else if(typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    }
    else{
        TypeError("identifier must be string or number")
    }
}

addNewPizza({id:4,name:"Tommatos", price: 9})
placeOrder("Tommatos")
completedOrder(0)
console.log("Order",orderQue)
console.log("Cash",cashInRegister)