console.log('Hello TypeScript!');




// Type Annotations
// TypeScript is a statically typed language, which means that the type of a variable is known at compile time.
// This is achieved by using type annotations, which are a way to explicitly specify the type of a variable.
// Here's an example of a type annotation in TypeScript:
let awesomeName: string = 'Alice';
awesomeName = 'something'; // OK  
awesomeName = awesomeName.toUpperCase(); // OK

// awesomeName = 42; // Error: Type '42' is not assignable to type 'string'

let amount: number = 42;
amount = 12 - 10; // OK
// amount = 'pants' // Error: Type '"pants"' is not assignable to type 'number'

let isAwesome: boolean = true;
isAwesome = false; // OK
// isAwesome = 42; // Error: Type '42' is not assignable to type 'boolean'


// Challenge

let greeting: string = 'Hello, World!';
greeting = greeting.toUpperCase(); // OK

let isHappy: boolean = true;
isHappy = !isHappy; // OK

let total: number = 42;
total = total - 10; // OK


// Type Inference
// TypeScript also has a feature called type inference, which allows the type of a variable to be automatically determined based on its value.
// This means that you don't always have to explicitly specify the type of a variable, as TypeScript can often infer it for you.
// Here's an example of type inference in TypeScript:
let awesomeName2 = 'Alice'; // Type is 'string'
awesomeName = 'something'; // OK
awesomeName = awesomeName.toUpperCase(); // OK

let amount2 = 42; // Type is 'number'
amount = 12 - 10; // OK 
// amount = 'pants' // Error: Type '"pants"' is not assignable to type 'number'

let isAwesome2 = true; // Type is 'boolean'
isAwesome = false; // OK
// isAwesome = 42; // Error: Type '42' is not assignable to type 'boolean'


// Union Types
// TypeScript also supports union types, which allow a variable to have more than one type.
// This can be useful when you want a variable to be able to hold different types of values.
// Here's an example of a union type in TypeScript:
let awesomeName3: string | number = 'Alice'; // Type is 'string | number'
awesomeName3 = 'something'; // OK	
awesomeName3 = 42; // OK
// awesomeName3 = True; // Error: Type 'True' is not assignable to type 'string | number'


// Literal Value Types
// TypeScript also supports literal value types, which allow a variable to have a specific value.
// This can be useful when you want a variable to only hold a certain value.
// Here's an example of a literal value type in TypeScript:

let requestStatus: 'pending' | 'success' | 'error' = 'pending'; // Type is 'pending' | 'success' | 'error'
requestStatus = 'success'; // OK
requestStatus = 'error'; // OK
requestStatus = 'pending'; // OK
// requestStatus = 'done'; // Error: Type '"done"' is not assignable to type 'pending' | 'success' | 'error'


// Type: any
// TypeScript also has a special type called any, which can be used to represent any type.
// This can be useful when you don't know the type of a variable, or when you want to opt out of type checking.
// Here's an example of the any type in TypeScript:

let unknownValue: any = 'Alice'; // Type is 'any'
unknownValue = 42; // OK
unknownValue = true; // OK
unknownValue = ['Alice', 42, true]; // OK


// Practical Example
let books = ['1984' , 'Atomic Habits', 'The Great Gatsby'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === 'Atomic Habits') {
    foundBook = book;
    foundBook = foundBook.toUpperCase(); // OK
    break;
  }
}

console.log(foundBook?.length); // OK

// Challenge
//- Create a variable orderStatus of type 
// 'processing' | 'shipped' | 'delivered' and assign it the value 
// 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// - Create a variable discount of type number | string 
// and assign it the value 20. Then, try to assign it the value '20%'.

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'; // Type is 'processing' | 'shipped' | 'delivered'
orderStatus = 'shipped'; // OK
orderStatus = 'delivered'; // OK
// orderStatus = 'done'; // Error: Type '"done"' is not assignable to type 'processing' | 'shipped' | 'delivered'

let discount: number | string = 20; // Type is number | string
discount = 20; // OK
discount = '20%'; // OK
// discount = true; // Error: Type 'true' is not assignable to type 'number | string'


// Arrays
// TypeScript also has support for arrays, which are used to store multiple values in a single variable.
// Here's an example of an array in TypeScript:
let prices: number[] = [10, 20, 30]; // Type is 'number[]'
prices = [40, 50, 60]; // OK
// prices = ['Alice', 'Bob', 'Charlie']; // Error: Type 'string[]' is not assignable to type 'number[]'

let names: string[] = ['Alice', 'Bob', 'Charlie']; // Type is 'string[]'
names = ['David', 'Edward', 'Frank']; // OK
// names = [10, 20, 30]; // Error: Type 'number[]' is not assignable to type 'string[]'

let emptyValues: any[] = [10, 'Alice', true]; // Type is 'any[]'
emptyValues = ['Bob', 20, false]; // OK
emptyValues = [true, 'Charlie', 30]; // OK

let array: (string | number)[] = ['Alice', 42]; // Type is '(string | number)[]'
array = [42, 'Alice']; // OK
// array = [true, 42]; // Error: Type 'boolean[]' is not assignable to type '(string | number)[]'


// Challenge
// - Create an array temperatures of type number[] 
// and assign it some values. Then, try to add a string value to it.
// - Create an array colors of type string[] and assign it some values.
//  Then, try to add a boolean value to it.
// - Create an array mixedArray of type (number | string)[] 
// and assign it some values. Then, try to add a boolean value to it.


let temperatures: number[] = [10,19,29];
// temperatures.push('omar');

let colors: string[] = ['red', 'blue', 'green'];
// colors.push(true);

let mixedArray: (number | string)[] = [10, 'Alice', 42];
mixedArray = ['Bob', 20, 'Charlie']; // OK
// mixedArray = [true, 'David', 30]; // Error: Type 'boolean[]' is not assignable to type '(number | string)[]'

// Objects
// TypeScript also has support for objects, which are used to store key-value pairs in a single variable.
// Here's an example of an object in TypeScript:

let person: { name: string, age: number } = { name: 'Alice', age: 42 }; // Type is '{ name: string, age: number }'
person.name = 'Bob'; // OK
person.age = 20; // OK
// person.race = 'White'; // Error:

let book = {title: 'book' , cost: 20};
let pen = {title: 'pen' , cost: 10};
let notebook = {title: 'notebook'};

// let items: {title: string, cost: number}[] = [book, pen, notebook];
//let items: {title: string, cost?: number}[] = [book, pen, notebook];
//items[0].title = 'new book'; will work without readonly
let items: { readonly title: string, cost?: number}[] = [book, pen, notebook];


// Challenge
// Create an object bike of type { brand: string, year: number } 
//and assign it some values. Then, try to assign a string to the year property.
//- Create an object laptop of type { brand: string, year: number }
// and try to assign an object with missing year property to it.
// Create an array products of type { title: string, price?: number }[] and assign it some values. 
//Then, try to add an object with a price property of type string to it.

let bike: {brand: string, year: number} = {brand: 'Yamaha', year: 2021};
bike.year = 2022; // OK
// bike.year = '2022'; // Error: Type '"2022"' is not assignable to type 'number'

let laptop: {brand: string, year?: number} = {brand: 'Apple'}; // OK
// laptop = {brand: 'Dell'}; // Error: Property 'year' is missing in type '{ brand: string; }' but required in type '{ brand: string; year: number; }'

let product1 = {title: 'book', price: 20};
let product2 = {title: 'pen'};


// Functions : parm
// TypeScript also has support for functions, which are used to perform a specific task.
// Here's an example of a function in TypeScript:

// any
// config
//type

function sayHi(name: string){
  console.log(`Hello, ${name.toUpperCase()}!`);
}

sayHi('Alice'); // OK
// sayHi(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'


// Returns

function calculateDiscount(price: number): number {
    const hasDiscount = true;

    if (hasDiscount) {
        return price * 0.9;
        //return '20%'; // Error: Type 'string' is not assignable to type 'number'
    }
}

const finalPrice = calculateDiscount(100); // Type is 'number'

// Challenge
// craete a new array of names
//write a new function that checks if a name in your.
//this function should take a name as a parameter and return a boolean.
//use this function to check if the name 'Alice' is in the array. and log results

const name2: string[] = ['omar','yusuf','adel']

function isNameThere(name:string):boolean{
    return name2.includes(name)
}

let checkName = 'omar'

if (isNameThere(checkName)) {
    console.log(`${checkName} is in the list`);
} else {
    console.log(`${checkName} is in not on the list`);
}

// Optional params
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);


//Default param

function calculateScore(
    initialScore: number, 
    penaltyPoints:number = 0
): number{
    return initialScore - penaltyPoints;
}

let scoreAfterPen = calculateScore(100,20)
let scoreWithoutPen = calculateScore(300);

// Rest param

function sum(message: string, ...numbers:number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);

    let total = numbers.reduce((previous, current)=>{
        return previous + current;
    }, 0);
    return `${message}${total}`;

}

let result = sum('The total is: ',1,2,3,4,5)
console.log(result);


// Void keyword
function logMessage(message: string): void{
    console.log(message);
    //return 'hello world';
}

logMessage('Hellp, homar');

// Functions using Union types as Function Params
//Challenge

//Your task is to create a function named processInput that 
//accepts a parameter of a union type string | number. 
//The function should behave as follows:
//If the input is of type number, the function should
// multiply the number by 2 and log the result to the console.
// If the input is of type string, the function
// should convert the string to uppercase and 
//log the result to the console.

function processInput(input: string | number){
    if(typeof input === 'number'){
     console.log(input * 2);
    }else{
        console.log(input.toUpperCase());
    }
}

processInput(2);
processInput('i cant do this');

// Functions objects as params

function createEmployee({ id }:{id: number }):{id: number; isActive:boolean}{

    return {id, isActive: id % 2 === 0};
};

const first = createEmployee({id:1})
const second = createEmployee({id:2})

console.log(first, second)



// alternative
function createStudent(student:{id:number; name:string}): void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
    id:5,
    name: 'george',
    email: 'george@gmail.com' // ts wont complain if added here
};

createStudent(newStudent)
//Excess property check
//createStudent({ id: 1, name: 'ben', email: 'ben@gmail.com' })

//Functions challenge

/*
Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that 
can be either a string or a number.
- The second parameter, config, should be an object with 
a reverse property of type boolean, by default it "reverse"
should be false

The function should behave as follows:

- If input is of type number, the function should return 
the square of the number.
- If input is of type string, the function should return 
the string in uppercase.
- If the reverse property on the config object is true, 
and input is a string, the function should return 
the reversed string in uppercase.

*/

function processData(
    input: string | number, 
    config: {reverse: boolean} = {reverse: false}
): string | number {
    if(typeof input === 'number'){
        return input * input
    } else {
        return config.reverse
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
        
    }
}

console.log(processData(10)); // Output: 100
console.log(processData('Hello')); // Output: HELLO
console.log(processData('Hello', { reverse: true })); // Output: OLLEH


// Type Aliases

type User = { id: number; name: string; isActive: boolean }

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: User  = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);

    return user;
}


type StringOrNumber = string | number; //not common but can see

let value: StringOrNumber;
value = "hello";
value= 123;


type Theme = 'light' | 'dark'; //more common to use 

let theme: Theme;
theme = 'light';
theme = 'dark';

function setTheme(t: Theme){
    theme = t;
}

setTheme('light');

// Challenge
/*
- Define the Employee type: 
Create a type Employee with properties id (number), name (string), 
and department (string).
- Define the Manager type: 
Create a type Manager with properties id (number), name (string), 
and employees (an array of Employee).
- Create a Union Type: 
Define a type Staff that is a union of Employee and Manager.
- Create the printStaffDetails function: 
This function should accept a parameter of type Staff. 
Inside the function, use a type guard to check if 
the 'employees' property exists in the passed object. 
If it does, print a message indicating that the person is a manager 
and the number of employees they manage. 
If it doesn't, print a message indicating that the person is an 
employee and the department they belong to.
- Create Employee and Manager objects: 
Create two Employee objects. One named alice and second named steve.
Also create a Manager object named bob who manages alice and steve.
- Test the function: 
Call the printStaffDetails function with alice and bob as arguments and 
verify the output.
*/

/*

type Employee = {id: number; name: string; department: string};
type Manager = {id: number; name: string; employees: Employee[]};
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
    if('employees' in staff){
        console.log(`${staff.name} is a manager of ${staff.employees.length} employees.`);
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department} department`);
    }
}


const alice: Employee = {
    id: 1,
    name: 'alice',
    department: 'IT'
};

const steve: Employee = {
    id: 2,
    name: 'steve',
    department: 'IT'
};

const bob: Manager = {
    id: 1,
    name: 'bob',
    employees: [alice, steve]
}

printStaffDetails(alice)
printStaffDetails(bob)


// Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};

*/

// Computed properties
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };


// Interface 
interface Novel{
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;

    //method
    printAuthor(): void;
    printTitle(message: string): string;
}

const deepWork: Novel = {
    isbn: 123,
    title: 'deep work',
    author: 'cal newport',
    genre: 'self help',

    printAuthor() {
        console.log(this.author);
    },

    printTitle(message) {
        return `${this.title} ${message}`;
    },
};

deepWork.printAuthor();
const review = deepWork.printTitle('is an awesome book');
console.log(review);

//deepWork.isbn = 'some value'


//challenge
/*
Start by defining an interface Computer using the interface keyword. 
This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. 
In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed 
once it's set.
- Use the ? after the storage property to indicate that this property is optional 
and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. 
In this case, we have upgradeRam, which is a function that takes a number 
and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface.
This object should have all the properties defined in the 
interface (except for optional ones, which are... optional), 
and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
*/

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;

    upgradeRam(upgrade: number): number;
}


const dell: Computer = {
    id: 2024,
    brand: 'dell',
    ram: 8,

    upgradeRam(increase) {
        this.ram += increase;
        return this.ram;
    },
}


dell.storage = 256;

console.log(dell.upgradeRam(4));
console.log(dell)


// interface merge

//Challenge p1

/*

- Define the Person interface Start by defining a Person interface with a 
name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and 
adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person 
and adds two methods: managePeople and delegateTasks. 
Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that 
returns a Person, DogOwner, or Manager. Inside this function, generate a random number 
and use it to decide which type of object to return. 
If the number is less than 0.33, return a Person. 
If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, 
or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

PART 2
A type predicate in TypeScript is a special kind of return type for a function that 
not only returns a boolean, but also asserts that the argument is of a specific type 
if the function returns true. It's typically used in user-defined type guard functions to 
narrow down the type of a variable within a certain scope. 
The syntax is arg is Type, where arg is the function argument and Type is the 
type you're checking for.

- Define the isManager function Define a function called isManager that takes an object 
of type Person | DogOwner | Manager and returns a boolean. 
This function should check if the managePeople method exists on the object, and 
return true if it does and false if it doesn't. 
The return type of this function should be a type predicate: obj is Manager.
- Run your code to see if it works as expected. 
If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.
*/

interface Person{
    name: string;
}

interface DogOwner extends Person {
    dogName: string;
}

interface Manager extends Person {
    managePeople(): void;
    delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
    const random = Math.random()
    if(random < 0.33){
        return {
            name: 'Bob'
        };
    } else if (random < 0.66) {
        return {
            name: 'ahmed',
            dogName: 'rob'
        };
    } else {
        return {
            name:'alex',
            managePeople(){
                console.log('Managing people....');
            },
            delegateTasks() {
                console.log('delegating tasks')
            },
        }
    }
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee)

// type predicate part 2

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return 'managePeople' in obj;
}

if (isManager(employee)){
    employee.delegateTasks();
}