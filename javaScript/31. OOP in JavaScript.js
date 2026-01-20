/*
OOP in JavaScript Checklist
    ✔ Class
    ✔ Constructor
    ✔ Inheritance
    ✔ Encapsulation
    ✔ Getter / Setter
    ✔ Polymorphism
    ✔ Static method

1.  OOP কী? (Why OOP?)
    OOP = Object Oriented Programming
    বড় application organize + scalable + maintainable করার পদ্ধতি

    =>  Real-life Example
        Car = Class
        BMW, Audi = Object

2.  Class
    Class হলো Blueprint
        class Person {
            speak() {
            console.log("I can speak");
        }
    }

3.  Constructor
    Object তৈরি হলে auto run হয়
        class Person {
            constructor(name, age) {
            this.name = name;
            this.age = age;
            }
        }
        let p1 = new Person("Abdul", 25);

4.  Method (Class Function)
    class Person {
        greet() {
        console.log(`Hello ${this.name}`);
        }
    }

5.  Inheritance
    Parent class থেকে child class properties নেয়
        class Animal {
            eat() {
            console.log("Eating");
            }
        }

        class Dog extends Animal {
            bark() {
            console.log("Barking");
            }
        }

    =>  super() (Must Know)
        class Student extends Person {
            constructor(name, age, id) {
            super(name, age);
            this.id = id;
            }
        }

6.  Encapsulation
    =>  Data hide করা
    =>  direct access বন্ধ করা
        Private Property (#)
            class BankAccount {
                #balance = 0;

        deposit(amount) {
            this.#balance += amount;
        }

        getBalance() {
            return this.#balance;
            }
        }
    =>  account.#balance → error

7.  Getter & Setter
    class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value === "") {
        console.log("Invalid name");
        } else {
        this._name = value;
        }
    }
    }

8.  Polymorphism (Advanced)
    class Shape {
        draw() {
            console.log("Drawing shape");
        }
    }

    class Circle extends Shape {
        draw() {
          console.log("Drawing circle");
        }
    }
    =>  same method, different behavior

9.  Static Method
    class MathUtil {
        static add(a, b) {
            return a + b;
        }
    }
    =>  MathUtil.add(2, 3);

=>  Common OOP Mistakes
    1.  constructor-এ super() না call
    2.  this misuse
    3.  private variable outside access
    4.  over inheritance

=>  Real-Life Example (Mini)
    class User {
        #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(pass) {
        return this.#password === pass;
        }
    }

=>  Practice Tasks (Very Important)
    1.  Person → Student inherit
    3.  BankAccount encapsulation
    4.  Getter/setter validation
    5.  Static utility class
    6.  Polymorphism demo
*/