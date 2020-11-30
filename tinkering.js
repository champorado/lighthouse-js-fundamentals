//factorial of  12! (12 * 11* 10...)
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);


// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}


for (x = 9; x>= 1; x--) {
  console.log(`hello ${x}`);
}










let num = 60;
while (num >= 0){
  // Orbiter transfers from ground to internal power (T-50 seconds)
if (num === 50) {
  console.log("Orbiter transfers from ground to internal power");
  // Ground launch sequencer is go for auto sequence start (T-31 seconds)
} else if (num === 31){
  console.log("Ground launch sequencer is go for auto sequence start");
  // Activate launch pad sound suppression system (T-16 seconds)
} else if (num === 16) {
  console.log("Activate launch pad sound suppression system");
}  // Activate main engine hydrogen burnoff system (T-10 seconds)
else if (num === 10) {
  console.log("Activate main engine hydrogen burnoff system");
    // Main engine start (T-6 seconds)
} else if (num === 6){
  console.log("Main engine start");
    // Solid rocket booster ignition and liftoff! (T-0 seconds)
} else if (num === 0) {
  console.log("Solid rocket booster ignition and liftoff!");
} else {
  console.log(`T-${num} seconds`)
};
num --

}












var num = 99;

while (num >= 1) {
  if (num === 2){
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottle of juice on the wall!`);
    } else if (num === 1) {
      console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
    } else {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
    };
    num --
  }



// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.


const whichSchool = function (age) {
  // Elementary School if age is below 13
  if (age < 13) {
    return "Elementary School";
    // Secondary School if age is between 13 and 18 (both inclusive)
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
    // Lighthouse Labs in all other cases.
  } else {
    return "Lighthouse Labs"
  }

}



console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));



var x = 1;

while (x<=20) {
    // check divisibility
    if ((x % 3 ===0) && (x % 5 === 0)) {
      console.log("JuliaJames");
    } else if (x % 5 === 0) {
      console.log("James");
    } else if (x % 3 ===0) {
      console.log("Julia");
    } else {
      console.log(x);
    };

    x ++;
    // print Julia, James, or JuliaJames
  }














//BANK FLOW ACTIVITIES
// var balance = 325.00;
// var checkBalance = true;
// var isActive = false;

// if (isActive === true && checkBalance === true) {
//   if (balance > 0) {
//     console.log(`Your balance is $${balance}.`)
//   } else if (balance ==== 0) {
//     console.log("Your account is empty.");
//   } else {
//     console.log("Your balance is negative, please contact bank.");
//   }
// } elseif (isActive === false && checkBalance === true){
//  console.log("Your account is no longer active.")
// } else {console.log ("Thank you, have a nice day!");
// }


//FLAVORS EXERCISE
// var flavor = "strawberry";
// var vessel = "cone";
// var toppings = "cookies";


// if (flavor === "vanilla" || flavor === "chocolate")
// { if ((vessel === "cone" || vessel ==="bowl") && (toppings === "peanuts" || toppings ==="sprinkles")) {
//   console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`)
// }

// }

//SHIRT SIZE ACTIVITY
// var shirtWidth = 22;
// var shirtLength = 30;
// var shirtSleeve = 8.63;

// if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
//   console.log("S");
// } else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
//   console.log("M"); 
// } else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
//   console.log("L");
// } else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
//   console.log("XL");
// } else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
//   console.log("2XL");
// } else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
//   console.log("3XL")
// } else {
//   console.log("N/A")
// }


