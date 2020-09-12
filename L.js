// Liskov Substitution Principle - Наследующий класс должен дополнять,
//                                 а не замещать поведение базового класса

class Person {
    // access() {
    //     console.log('You have the access!')
    // }
    access() {
        throw new Error('Access method must be implemented!')
    }
}

class Employee extends Person {
    constructor() {
        super()
    }
    access() {
        console.log('You have the access!')
    }
}

// class Worker extends Person {
//     work() {}
// }
class Worker extends Employee {
    constructor() {
        super()
    }
    work() {}
}

// class Manager extends Person {
//     manage() {}
// }
class Manager extends Employee {
    constructor() {
       super()
    }
    manage() {}
}

function openDoor(person) {
    person.access()
}

openDoor(new Worker())
openDoor(new Manager())

class Guest extends Person {
    constructor() {
        super()
    }
    access() {
        console.log('You have not access!!!')
    }
}

// class Client extends Person {
//     access() {
//         throw new Error('You have no access!!!')
//     }
// }

class Client extends Guest {
    constructor() {
        super()
    }
    buy() {}
}

openDoor(new Client())
