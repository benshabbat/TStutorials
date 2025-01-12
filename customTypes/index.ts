type Address={
    street:string
    city:string
    country:string
}


type Person={
    name:string
    age:number
    isStudent:boolean
    address?:Address
}

let person:Person={
    name:"John",
    age:25,
    isStudent:true
}

let person2:Person={
    name:"Jane",
    age:30,
    isStudent:false
}

function displayInfo(person:Person){
    console.log(`Name: ${person.name}, City: ${person.address?.city}`)
}

displayInfo(person)