const choice = prompt("What do you want to order? 1. Pizza. 2. Pasta 3. Salad.");
const subtype = prompt("Which type do you want? 1. Hawaii. 2. Margarita.");
const age = parseInt(prompt("How old are you?"))

switch (undefined)  {
    case (choice =="1" && subtype == "1" && age <= 18):
        alert ("Hawaii pizza it is! Kids portion")
        break;
    case (choice =="1" && subtype == "1" && age > 18):
        alert ("Hawaii pizza it is! Adult portion")
        break;
    case (choice =="2" && subtype == "1" && age > 18):
        alert ("Tomato pasta it is! Adult portion")
        break;
    case (choice =="2" && subtype == "1" && age <= 18):
        alert ("Feta pasta it is! Kid portion")
        break;
    case (choice =="3" && subtype == "1" && age <= 18):
        alert ("Tomato salad it is! Kids portion")
        break;
    case (choice =="3" && subtype == "1" && age > 18):
        alert ("Tomato salad it is! Adult portion")
        break;
    case (choice =="3" && subtype == "2" && age > 18):
        alert ("Cesar pasta it is! Adult portion")
        break;
    case (choice =="3" && subtype == "3" && age <= 18):
        alert ("Cesar salad it is! Kid portion")
        break;
    }
    