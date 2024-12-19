// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let customerName = prompt("What's your name?");
if (customerName !== null && customerName.trim() !== "") {
  alert(`Hi and welcome, ${customerName}!`);
} else {
  alert("What, you don't have a name?");
}

// Step 2 - Food choice
// Your code goes here

let choice = prompt("What do you want to order? 1. Pizza. 2. Pasta 3. Salad.");

let subtype = "";
if (choice === "1") {
  alert(`Pizza it is!`);
  subtype = prompt("Which type do you want? 1. Hawaii. 2. Margarita.");
  if (subtype === "1") {
    alert("Hawaii pizza it is!");
  } else if (subtype === "2") {
    alert("Margarita pizza it is!");
  }

} else if (choice === "2") {
  alert(`Pasta it is!`);
  subtype = prompt("Which type do you want? 1. shrimp. 2. ham.");
  if (subtype === "1") {
    alert("Shrimp pasta it is!");
  } else if (subtype === "2") {
    alert("Ham pasta it is!");
  }

} else if (choice === "3") {
  alert(`Salad it is!`);
  subtype = prompt("Which type do you want? 1. Cesar. 2. tomato.");
  if (subtype === "1") {
    alert("Cesar salad it is!");
  } else if (subtype === "2") {
    alert("Tomato salad it is!");
  }
} else {
  alert("Invalid choice. Please try again.");
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here
let age = prompt("How old are you?");
if (0 < age < 18) {
  alert("Kids portion it is!");
} else if (age >= 18) {
  alert("Adult portion it is!");
} else {
  alert("Invalid age. Please try again.");
}

// Step 5 - Order confirmation
// Your code goes here

let food = "";
  if (choice === "1") {
    if (subtype === "1") {
      food = "Hawaii pizza"
    }
    else { food = "Marguerite pizza" }
  } else if (choice === "2") {
    if (subtype === "1") {
      food = "shrimp pasta"
    } else { food = "ham pasta" }
  } else {
    if (subtype === "1") { food = "Cesar salad" }
    else { food = "tomato salad" }
}

let portionSize = "";
if (0 < age <18) {portionSize = "kids"}
else {portionSize = "adults"}

alert(`Dear ${customerName} you ordered a ${food}, ${portionSize} portion`)
