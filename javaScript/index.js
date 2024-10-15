// Exercise 1
console.log("Hello World!!!");

// Exercise 2
let myName = "Ida";
console.log(`Hello, my name is ${myName}!`);

let myAge = 34;
console.log(`I am ${myAge} years old.`);

let favoriteColor = "Black";
console.log(`My favorite color is ${favoriteColor}.`);

let button = document.getElementById("btn");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let printName = document.createElement("p");
  printName.textContent = `My name is ${myName}! I am ${myAge} years old and my favorite color is ${favoriteColor}.`;
  document.body.appendChild(printName);
});

// Exercise 3

let oneZeroZero = 100;
let fiveZero = 50;

let subtraction = (oneZeroZero -= 30);
console.log(subtraction);

let division = (oneZeroZero /= 2);
console.log(division);

let addition = (fiveZero += 50);
console.log(addition);

let multiplication = (fiveZero *= 6);
console.log(multiplication);
