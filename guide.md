עקרונות תכנות מונחה עצמים (OOP) ב-JavaScript

מסמך זה מציג את שלושת העקרונות המרכזיים של OOP עם דוגמאות קוד באנגלית והסברים קצרים.

1. הכמסה (Encapsulation)

הכמסה היא העקרון של הסתרת המידע הפנימי של האובייקט וחשיפה רק של מה שנחוץ כלפי חוץ. ב-JavaScript מודרני, משתמשים בסימן # כדי להגדיר שדות פרטיים.

class BankAccount {
    // Private field (starts with #). Cannot be accessed from outside class
    #balance; [cite: 9, 10]

    constructor(initialBalance) {
        this.#balance = initialBalance; [cite: 11, 12]
    }

    // Public method allowing controlled access to data
    deposit(amount) { [cite: 14, 15]
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`); [cite: 16-18]
        }
    }

    // Getter allows reading the balance but not modifying it directly
    get balance() {
        return this.#balance; [cite: 21, 22]
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
// console.log(myAccount.#balance); // Error! Private field
console.log(myAccount.balance); // Prints 150 (accessed via getter) [cite: 29, 30]



2. הורשה (Inheritance)

הורשה מאפשרת למחלקה אחת (ילד) לקבל את התכונות וההתנהגות של מחלקה אחרת (אבא). זה מונע שכפול קוד.

// Base Class (Parent)
class Animal {
    constructor(name) {
        this.name = name; [cite: 33-35]
    }

    eat() {
        console.log(`${this.name} is eating.`); [cite: 37, 38]
    }
}

// Sub Class (Child) inherits from Animal using 'extends'
class Dog extends Animal {
    constructor(name, breed) {
        // 'super' calls the parent constructor to initialize 'name'
        super(name);
        this.breed = breed; [cite: 41-43]
    }

    bark() {
        console.log("Woof! Woof!"); [cite: 44, 45]
    }
}

const rex = new Dog("Rex", "German Shepherd");
rex.eat(); // Inherited method from Animal
rex.bark(); // Specific method for Dog [cite: 52]


3. פולימורפיזם (Polymorphism)

פולימורפיזם ("רב-צורתיות") מאפשר למחלקות שונות לממש את אותה פונקציה בצורה שונה. המחלקה היורשת "דורסת" (Overrides) את הפונקציה של האבא.

class Shape {
    // Generic method to be overridden by subclasses
    area() {
        return 0; [cite: 56-59]
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius; [cite: 62-65]
    }

    // Method Overriding specific implementation for Circle
    area() {
        return Math.PI * this.radius * this.radius; [cite: 67-69]
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side; [cite: 73-78]
    }

    // Method Overriding specific implementation for Square
    area() {
        return this.side * this.side; [cite: 80-83]
    }
}

// Using Polymorphism: The code treats all objects as 'Shape'
const shapes = [new Circle(10), new Square(5)]; [cite: 86]

shapes.forEach(shape => {
    // The same method call executes different logic based on the object type
    console.log(`Shape area: ${shape.area()}`); [cite: 87, 88]
});