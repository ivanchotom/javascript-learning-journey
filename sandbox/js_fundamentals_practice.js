// ===============================================
// JAVASCRIPT FUNDAMENTALS - PRACTICE FILE
// ===============================================
// Run this file: node js_fundamentals_practice.js
// Or open in browser with HTML file

console.log("🚀 Welcome to JavaScript Fundamentals!");
console.log("=====================================\n");

// ===============================================
// 1. VARIABLES & DATA TYPES
// ===============================================
console.log("1. VARIABLES & DATA TYPES");
console.log("-------------------------");

// Unlike C++, JavaScript is dynamically typed
// You don't need to declare types!

// Variable declarations (3 ways)
var oldWay = "Don't use var anymore"; // Old way - avoid
let modernWay = "Use let for variables that change";
const constant = "Use const for values that don't change";

// Basic data types
let myNumber = 42;              // Number (no int/float distinction)
let myFloat = 3.14159;          
let myString = "Hello World";   // String
let myBoolean = true;           // Boolean
let myUndefined;                // undefined (declared but no value)
let myNull = null;              // null (intentionally empty)

console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("String:", myString, "Type:", typeof myString);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);
console.log("Undefined:", myUndefined, "Type:", typeof myUndefined);
console.log("Null:", myNull, "Type:", typeof myNull); // Quirk: shows "object"!

// ===============================================
// 2. STRINGS (More flexible than C++)
// ===============================================
console.log("\n2. STRINGS");
console.log("-----------");

let firstName = "John";
let lastName = "Doe";

// String concatenation (like Python)
let fullName1 = firstName + " " + lastName;
console.log("Concatenation:", fullName1);

// Template literals (like Python f-strings, but with backticks)
let fullName2 = `${firstName} ${lastName}`;
console.log("Template literal:", fullName2);

// Multi-line strings (much easier than C++)
let multiLine = `
    This is a 
    multi-line 
    string!
`;
console.log("Multi-line:", multiLine);

// ===============================================
// 3. FUNCTIONS (Very flexible!)
// ===============================================
console.log("\n3. FUNCTIONS");
console.log("-------------");

// Function declaration (similar to C++)
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression (stored in variable)
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function (short form) - JavaScript's coolest feature!
const greetShort = name => `Hello, ${name}!`;

console.log(greet("Alice"));
console.log(greetArrow("Bob"));
console.log(greetShort("Charlie"));

// Functions are first-class objects (can be passed around)
function callTwice(func, value) {
    console.log(func(value));
    console.log(func(value));
}

callTwice(greetShort, "World");

// ===============================================
// 4. ARRAYS (Like Python lists, but different syntax)
// ===============================================
console.log("\n4. ARRAYS");
console.log("----------");

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null]; // Can mix types!

console.log("Numbers array:", numbers);
console.log("Mixed array:", mixed);
console.log("Array length:", numbers.length);
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// Array methods (similar to Python but different syntax)
numbers.push(6);           // Add to end
console.log("After push:", numbers);

let popped = numbers.pop(); // Remove from end
console.log("Popped:", popped, "Array now:", numbers);

// ===============================================
// 5. OBJECTS (Like Python dictionaries)
// ===============================================
console.log("\n5. OBJECTS");
console.log("-----------");

// Object literal syntax
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isStudent: false
};

console.log("Person object:", person);
console.log("Person name:", person.name);        // Dot notation
console.log("Person age:", person["age"]);       // Bracket notation

// Adding properties
person.email = "alice@email.com";
person["phone"] = "123-456-7890";

console.log("Updated person:", person);

// ===============================================
// 6. CONTROL FLOW (Similar to C++ and Python)
// ===============================================
console.log("\n6. CONTROL FLOW");
console.log("----------------");

// If statements (similar syntax to C++)
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// For loops
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// For...of loop (like Python's for...in)
console.log("Array elements:");
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// ===============================================
// 7. YOUR FIRST EXERCISES
// ===============================================
console.log("\n7. PRACTICE EXERCISES");
console.log("=====================");

// Exercise 1: Create a function that calculates area of circle
// Solution:
const circleArea = (radius) => {
    const pi = 3.14159;
    return pi * radius * radius;
};

// Test the circle area function
console.log("\nExercise 1: Circle Area Calculator");
console.log("----------------------------------");
console.log("Area of circle with radius 5:", circleArea(5));
console.log("Area of circle with radius 2.5:", circleArea(2.5));

// Exercise 2: Create an array of your favorite programming languages
// TODO: Create an array called 'languages' with at least 3 programming languages you know or want to learn
// TODO: Use a for...of loop to print each language with a message like "I know JavaScript" or "I want to learn Python"
// Hint: Use template literals for the message: `I know ${language}`

// Exercise 3: Create a person object with your info
// TODO: Create object with name, age, favoriteLanguage properties
let object_exercise_3 = {
    name: "John",
    age: 25,
    favoriteLanguage: "C++",
    isStudent: true
};
console.log("Exercise 3: Person object:", object_exercise_3);

// Exercise 4: Write a simple calculator function
// TODO: Function that takes two numbers and operation (+, -, *, /) and returns result

const calculator = (num1, num2, operation) => {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operation";
    }
};

console.log("\nExercise 4: Simple Calculator");
console.log("-------------------------");
console.log("5 + 3 =", calculator(5, 3, '+'));
console.log("10 / 2 =", calculator(10, 2, '/'));
console.log("4 * 2 =", calculator(4, 2, '*'));
console.log("10 - 3 =", calculator(10, 3, '-'));

console.log("\n🎯 Complete the remaining exercises!");
console.log("💡 Tip: Use console.log() to see your results"); 