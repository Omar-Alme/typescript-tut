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

