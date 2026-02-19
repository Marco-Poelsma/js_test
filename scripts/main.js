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

    console.log(obj1.surname); //apellid
}

test();