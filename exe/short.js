//  001
class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    details() {
        console.log(`the branf is : ${this.brand}, the model is ${this.model}`);
    }
}
// p1 = new Phone("Samsung", "S22")
// console.log(p1);

// 002
class Rectengle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height
    }
}
// r1 = new Rectengle(2, 5)
// console.log(r1.area());

// 003
class BankAcount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount
    }
    withdarw(amount){
        if(amount <= this.balance){
            this.balance -= amount
        }
    }
    checkBalance(){
        console.log(this.balance);
    }
}
// b1 = new BankAcount("ben", 1000)
// console.log(b1);
// b1.deposit(500)
// b1.withdarw(200)
// b1.checkBalance();

// 004
class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} makes a sound`
    }
}
class Dog extends Animal {
    bark() {
        return `${this.name} barks`;
    }
}
// a1 = new Animal("Rockey")
// console.log(a1);
// r = a1.speak();
// console.log(r);
// d1 = new Dog("Rocky")
// console.log(d1.bark());


// 005
class Vehicle{
    constructor(type){
        this.type = type
    }
    describe(){
        return `this is a ${this.type}`
    }
}
class Car extends Vehicle {
    constructor(brand,type){
        super(type)
        this.brand = brand
    }
    info(){
        return `this is a ${this.brand}, ${this.type}`
    }
}
// const myCar = new Car("Toyota", "Corolla")
// console.log(myCar.describe());
// console.log(myCar.info());


// 006
class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    super
}