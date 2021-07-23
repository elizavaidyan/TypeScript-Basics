"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
//Variable Declaration
var sum = 0;
var total;
var title = 'Typescript';
//Variable Types
var isBeginner = true;
var total1 = 0;
var name = 'Ann';
var sentence = "My name is " + name + "\nI am a beginner in Typescript"; //Template string- can span multiple lines and can have embedded expressions
console.log(sentence);
//null and undefined types; subtypes
var n = null;
var u = undefined;
var isNew = true;
var myName = undefined;
//array type; Declaration can be done in two ways
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Array with mixed type- Tuple
var person1 = ['Chris', 22]; //no of elements are fixed and order of value should match..one string and one number 
// let person1: [string, number] = ['Chris', 22, 33]; //wrong
//let person1: [string, number] = [22, 'Chris']; //wrong
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); //prints 2 ; enum assigns value starts from 0; Red=0, Green =1; Blue =3
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 5] = "red";
    Color1[Color1["green"] = 6] = "green";
    Color1[Color1["blue"] = 7] = "blue";
})(Color1 || (Color1 = {})); //not a good practice
var c1 = Color1.blue;
console.log(c1); //prints 7 ; red=5, green = 6, blue =7
//anytype
var randomValue = 10;
randomValue = true;
randomValue = 'Ann';
/* let myVariable: any = 10;
console.log(myVariable.name);

myVariable();
myVariable.toUpperCase(); */
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//(myVariable as string).toUpperCase(); //Type assertion as like type cast in other langs
//Type Inference
var a;
a = 10;
a = true;
var b = 20;
// b= true; //error ; typescript inferred b as a number //type inference
//type insference does not work with var initialization
//Union of types of a var
var multiType;
multiType = 10;
multiType = true; // union can be used when the var from library or user input. Its better than anytype
//Functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 'AAA')); //prints 10AAA
//specifying arguments types
function add1(num1, num2) {
    return num1 + num2;
}
// add1(10, 'AAA'); shows error
console.log(add1(10, 20)); // result is 30
function add3(num1, num2) {
    return num1 + num2;
}
//In typescript every param is assumed to be required by the fun. To call a func without a param throws an error. But in plain JS, it would have been possible
//Params then receive a value of undefined.
//In typescript, adding a ? with a param to make it optional
//Can have any no. of optional params, but alws be after the required params.
function add4(num1, num2) {
    return num1 + num2;
}
console.log(add4(5, 10)); //15
console.log(add4(5)); //NaN because num2 is undefined. 5+undefined = NaN
function newAdd(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(newAdd(5, 10)); //15
console.log(newAdd(5)); //5
//Funs with default params - default params are like optional params, , with set values instead of undefined.
function newadd1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(newadd1(20)); // here num1 =20, num2 is default param with value 10. result is 30.
//Interface in TypeScript
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
//Creating an object resembles person
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
//Passing p object when calling the function fullName
fullName(p); //prints Bruce Wayne
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName1(p); //prints Bruce Wayne
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p1 = {
    firstName: 'Bruce'
};
fullName2(p1);
//One of the use cases of optional properties is forms Eg: registration form: here not all the fiels are mandatory. Then optional properties can be used here.
//**Class
// Creating a class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
//Creating instance of the class
var emp1 = new Employee('Viswas');
console.log(emp1.employeeName);
emp1.greet();
//Class - Inheritance; use extends keyword
//Inherited class from 'Employee' class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
//Creating an instance of manager class
var m1 = new Manager("Arnold");
m1.delegateWork();
m1.greet(); //accessing base class method
console.log(m1.employeeName); //accessing base class property
//Access mkdifiers are keywords that set accessibility of properties and methods in a class;
//By default each class member is public. So we can freely access them throughout the program; public keyword is optional
//private- cannpt access outside of containing class ; this is a way to secure class properties; cannot access a private member even in derived class
var Employee1 = /** @class */ (function () {
    function Employee1(name) {
        this.employeeName = name;
    }
    Employee1.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee1;
}());
var emp2 = new Employee1('Viswas');
//console.log(emp2.employeeName); //Property employeeName is private and only accessable with class Employee1
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager1.prototype.delegateWork = function () {
        //console.log(`Manager delegating tasks ${this.employeeName}`);  //property is private and accessible only to base class
    };
    return Manager1;
}(Employee1));
//Protected - sometimes the derived class should have access to the base class properties, but the properties should not be accessible outside the classes
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.employeeName = name;
    }
    Employee2.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee2;
}());
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager2.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager2;
}(Employee2));
var emp3 = new Employee2('Viswas');
//console.log(emp3.employeeName); //only accessable with class Employee1
var m2 = new Manager2("Arnold--");
//console.log(m2.employeeName); //protected, only accessible inside base class and its subclasses
//public for free accessibility
//private for accessibility within the class
//protected for accessibity within the class and classes derived from it..
