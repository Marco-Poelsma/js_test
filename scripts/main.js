console.log("Hello World!");

const hola = document.getElementById("hola");
console.log(hola);

// MARK: DECLARING VARIABLES
var a = 42; //deprecated
a = "ahora eres un string";

let b = 42; //modern declaration of variables
b = "ahora eres un string";

const c = 42; //constant (invariable)

// MARK: VARIABLE TYPES
// NUMBER
const n1 = 100; // Numbers can be integers
const n2 = 4.6; // Or floats

// STRING
const s1 = "A string";
const s2 = 'A string';
const s3 = `A string`; // This one also lets us add stuff like newline characters, as well as other useful things

// BOOLEAN
const b1 = true; // Lowercase
const b2 = false;

// ARRAYS
/**
 * Since arrays are dealt with pointers, it is important to declare them as const to avoid overwriting them later on.
 */
const arr1 = []; // Empty Array
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, "hola", true];

// OBJECTS
const obj1 = {
    name: "Test",
    surname: "Yes",
    pokemon: "Umbreon",
    age: 23094823,
    hobbies: ["A", "B", "C"]
};


// ACCESSING VARIABLES INSIDE ARRAYS OR OBJECTS
console.log(arr2[4]);
console.log(obj1.surname);
console.log(obj1["surname"]);
console.log(obj1.hobbies);

// NULL
console.log(null);

// UNDEFINED
let itbe;
console.log(itbe);

// MARK: VARIABLE SCOPES
function test() {
    const obj1 = {nombre: "Lorem"};

    console.log(obj1.surname); //surname is not defined in this scope
}

test();

/**
 * Here is where the difference between let and var resides.
 * While var is a global variable available across all scopes,
 * let is only allowed within its block's scope.
 * Since global variables are dangerous, it is important to use let instead of var when we need to declare variables.
 */

// MARK: CONDITIONALS

// IF ... ELSE IF ... ELSE
if (c == 42) {
    console.log("C is 42");
} else if (c == 43) {
    console.log("C is 43");
} else {
    console.log("C is neither 42 or 43");
}


// SWITCH-CASE
switch(c) { // Don't forget to use break statements!
    case 41:
        console.log("C is 41");
        break;
    case 42:
        console.log("C is 42");
        break;
    case 43:
        console.log("C is 43");
        break;
    default:
        console.log("C is neither 41, 42, or 43");
        break;
}

// MARK: LOOPS

// WHILE
while(false) { // This loop won't print anything as the condition is checked before first iteration.
    console.log("Haiii!!! :333");
}

// DO-WHILE
do { // This loop will print once as the condition is checked after first iteration.
    console.log("Haii!!!!!!!!! :3333 ");
} while (false);

// FOR
for (let i = 0; i < obj1.hobbies.length; i++) {
    console.log("One of my hobbies is ", obj1.hobbies[i]);
}

// FOR OF (FOR-EACH)
for (let hobby of obj1.hobbies) {
    console.log("One of my hobbies is ", hobby);
}


// MARK: BUILT-IN OBJECTS
console.log(Math.random) // Random number
console.log(Math.floor(44.5)) // Truncate
console.log(Math.PI) // The number Pi