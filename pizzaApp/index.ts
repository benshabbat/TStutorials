const menu [
    {name:"margarita", price: 5},
    {name:"Olives", price: 7},
    {name:"vegetarian", price: 6},
    {name:"mushrooms", price: 8},
]


const cashInRegister = 100;
const orderQue=[]

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder(namePizza){
    const pizza = menu.find(pizza => pizza.name === namePizza)
    cashInRegister += pizza.price;
    const newOrder ={
        pizzaName: pizza.name,
        status:"orderded"
    }
    orderQue.push(newOrder)
    return newOrder
}