type Pizza = {
    name: string;
    price: number;
}

interface Order {
    id: number;
    pizzaName: string;
    status: string;
}
const menu:Pizza[] =[
    {name:"margarita", price: 5},
    {name:"Olives", price: 7},
    {name:"vegetarian", price: 6},
    {name:"mushrooms", price: 8},
]

let nextOrderId=0;
let cashInRegister = 100;

const orderQue: Order[] = [];

function addNewPizza(pizzaObj:Pizza){
    menu.push(pizzaObj)
}

function placeOrder(namePizza:string){
    const pizza = menu.find(pizza => pizza.name === namePizza)
    if (!pizza) {
        throw new Error(`Pizza with name ${namePizza} not found`);
    }
    cashInRegister += pizza.price;
    const newOrder ={
        id:nextOrderId++,
        pizzaName: pizza.name,
        status:"orderded"
    }
    orderQue.push(newOrder)
    return newOrder
}

function completedOrder(orderId:number){
    const order = orderQue.find(order => order.id === orderId)
    if (!order) {
        throw new Error(`Pizza with id ${orderId} not found`);
    }
    order.status = "completed"
    return order
}

addNewPizza({name:"Tommatos", price: 9})
placeOrder("Tommatos")
completedOrder(0)
console.log("Order",orderQue)
console.log("Cash",cashInRegister)