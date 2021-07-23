export {}
let message = 'welcome back';
console.log(message);

//Variable Declaration
let sum = 0;
let total;
const title = 'Typescript';

//Variable Types
let isBeginner: boolean = true;
let total1: number = 0;
let name: string = 'Ann';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`; //Template string- can span multiple lines and can have embedded expressions

console.log(sentence);

//null and undefined types; subtypes

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = true;
let myName: string = undefined;

//array type; Declaration can be done in two ways

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Array with mixed type- Tuple

let person1: [string, number] = ['Chris', 22]; //no of elements are fixed and order of value should match..one string and one number 
// let person1: [string, number] = ['Chris', 22, 33]; //wrong
//let person1: [string, number] = [22, 'Chris']; //wrong

//enum

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c); //prints 2 ; enum assigns value starts from 0; Red=0, Green =1; Blue =3

enum Color1 {red = 5, green, blue} //not a good practice
let c1: Color1 = Color1.blue;
console.log(c1); //prints 7 ; red=5, green = 6, blue =7

//anytype
let randomValue: any = 10;
randomValue = true;
randomValue = 'Ann';

/* let myVariable: any = 10;
console.log(myVariable.name);

myVariable();
myVariable.toUpperCase(); */

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//(myVariable as string).toUpperCase(); //Type assertion as like type cast in other langs

//Type Inference

let a;
a= 10;
a = true;

let b = 20;
// b= true; //error ; typescript inferred b as a number //type inference

//type insference does not work with var initialization

//Union of types of a var

let multiType: number | boolean;
multiType = 10;
multiType = true; // union can be used when the var from library or user input. Its better than anytype

//Functions

function add(num1,num2) {
    return num1 + num2;
}   

console.log(add(10,'AAA')); //prints 10AAA
//specifying arguments types

function add1(num1: number, num2: number) {
    return num1 + num2;
}

 // add1(10, 'AAA'); shows error

 console.log(add1(10, 20));  // result is 30

 function add3(num1: number, num2: number): number { //specifies the return type
     return num1 + num2;
 }

 //In typescript every param is assumed to be required by the fun. To call a func without a param throws an error. But in plain JS, it would have been possible
 //Params then receive a value of undefined.

 //In typescript, adding a ? with a param to make it optional
 //Can have any no. of optional params, but alws be after the required params.

 function add4(num1: number, num2?: number): number {
     return num1 + num2;
 }

 console.log(add4(5, 10)); //15
 console.log(add4(5)); //NaN because num2 is undefined. 5+undefined = NaN

 function newAdd(num1: number, num2?: number) : number{
     if(num2) {
         return num1 + num2;
     }
     else {
         return num1;
     }
 }

 console.log(newAdd(5,10)); //15
 console.log(newAdd(5));  //5

 //Funs with default params - default params are like optional params, , with set values instead of undefined.

 function newadd1(num1: number, num2: number = 10): number {
     if (num2) {
         return num1 + num2;
     }
     else {
         return num1;
     }
 }

 console.log(newadd1(20)); // here num1 =20, num2 is default param with value 10. result is 30.

 //Interface in TypeScript

 function fullName(person : {firstName: string, lastName: string}) {  //person is an object
     console.log(`${person.firstName} ${person.lastName}`);
 }

 //Creating an object resembles person

 let p = {
     firstName : 'Bruce',
     lastName : 'Wayne'
 };

 //Passing p object when calling the function fullName

 fullName(p); //prints Bruce Wayne

 //For objects with many properties, we can create interface for object and use that interface as a type for func param

 //Creating an interface which an object. This interface can be used in multiple funcs. 

 interface Person1 {
     firstName: string,
     lastName: string;
 }

 function fullName1(person: Person1) {
     console.log(`${person.firstName} ${person.lastName}`);
 }

 fullName1(p); //prints Bruce Wayne

 //It is possible to specify property of interface optional. 

 interface Person2 {
    firstName: string,
    lastName?: string;
}

function fullName2(person: Person2) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p1 = {
    firstName : 'Bruce'
};

fullName2(p1);

//One of the use cases of optional properties is forms Eg: registration form: here not all the fiels are mandatory. Then optional properties can be used here.

//**Class

// Creating a class

class Employee { //three members- a property, a constructor, a method
    employeeName : string;

    constructor(name: string) {  //a constructor to initialize the employee name
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

//Creating instance of the class

let emp1 = new Employee('Viswas');
console.log(emp1.employeeName);
emp1.greet();

//Class - Inheritance; use extends keyword

//Inherited class from 'Employee' class

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName); //to call base class constructor; managername gets initialized to the employeename in the employee class
    }
    delegateWork() { //method
        console.log(`Manager delegating tasks`);
    }
}

//Creating an instance of manager class

let m1 = new Manager(`Arnold`);
m1.delegateWork();
m1.greet(); //accessing base class method
console.log(m1.employeeName); //accessing base class property

//Access mkdifiers are keywords that set accessibility of properties and methods in a class;
//By default each class member is public. So we can freely access them throughout the program; public keyword is optional
//private- cannpt access outside of containing class ; this is a way to secure class properties; cannot access a private member even in derived class

class Employee1 { //three members- a property, a constructor, a method
    private employeeName : string;

    constructor(name: string) {  //a constructor to initialize the employee name
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp2 = new Employee1('Viswas');
//console.log(emp2.employeeName); //Property employeeName is private and only accessable with class Employee1

class Manager1 extends Employee1 {
    constructor(managerName: string) {
        super(managerName); //to call base class constructor; managername gets initialized to the employeename in the employee class
    }
    delegateWork() { //method
        //console.log(`Manager delegating tasks ${this.employeeName}`);  //property is private and accessible only to base class
    }
}
//Protected - sometimes the derived class should have access to the base class properties, but the properties should not be accessible outside the classes

class Employee2 { //three members- a property, a constructor, a method
    protected employeeName : string;

    constructor(name: string) {  //a constructor to initialize the employee name
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

class Manager2 extends Employee2 {
    constructor(managerName: string) {
        super(managerName); //to call base class constructor; managername gets initialized to the employeename in the employee class
    }
    delegateWork() { //method
        console.log(`Manager delegating tasks ${this.employeeName}`); 
    }
}

let emp3 = new Employee2('Viswas');
//console.log(emp3.employeeName); //only accessable with class Employee1

let m2 = new Manager2(`Arnold--`);
//console.log(m2.employeeName); //protected, only accessible inside base class and its subclasses

//public for free accessibility
//private for accessibility within the class
//protected for accessibity within the class and classes derived from it..
