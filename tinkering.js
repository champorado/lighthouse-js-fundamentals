//We are rootin' for you assignment
// Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by(in the case of a tomato, either redness or plumpness).

// Our function must return the name of the person who submitted(vegetables.submitter) the vegetable with the highest ranking in the provided category.
//*pay attention to dot notation [metric]

const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let index = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      highest = vegetables[i][metric];
      index = i;
    }
  }
  return vegetables[index].submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)



//takes in an array of car objects and the speed of a car as it passes the sensor
const carPassing = function (cars, speed) {

  //function should create a new object with a property called speed and another property called time Date.now() and add it to the cars array.
  cars.push({ time: Date.now(), speed: speed });
  return cars;
}



const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38
carPassing(cars, speed)


var umbrella = {
  color: "pink",
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Jullia closes the umbrella!";
    } else {
      return "The umbrella is already closed!";
    }
  };


  /*
   * Programming Quiz: Donuts Revisited (7-6)
   */

  /*
   * QUIZ REQUIREMENTS
   * - Your code sshould have an array named `donuts`
   * - Your `donuts` array should call the `forEach()` method
   * - Your `forEach()` loop should output the donut summaries
   * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
   */

  // This is an array of objects. 
  var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ];

  // your code goes here
  donuts.forEach(function (donut) {
    // donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
    console.log(`${donut.type} donuts cost $${donut.cost} each`)
  });

  /*
   * Programming Quiz: Facebook Friends (7-5)
   */

  /*
   * QUIZ REQUIREMENTS
   * - Your code should have an object `facebookProfile`
   * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
   * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
   * - Carefully implement the desired functionality of each method, as decribed above
   */


  // TIP - 
  // In an array, 
  // - addition at the end is done using push() method
  // - addition at a specific index is done using splice() method
  // - deletion from the beginning is done using pop() method
  // - deletion from a specific index is done using splice() method

  // your code goes here
  const facebookProfile = {
    name: "Awesome Possum",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3"],
    postMessage: function (message) {
      facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
      // In the following splice() method call,
      // - argument 1 = index from where the element has to be deleted
      // - argument 2 = count of elements to be deleted
      facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
      facebookProfile.friends = facebookProfile.friends + 1
      //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function () {
      if (facebookProfile.friends > 0) {
        facebookProfile.friends = facebookProfile.friends - 1;
      };
    }
  }






/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },
    printAccountSummary() {
      return `Welcome!/nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`
    }
  };

  console.log(savingsAccount.printAccountSummary());


  //define lastIndexOf() rightAnswer- 
  // when given an array and a value, it should return the idex of the last time the value occurs in array
  // if the value never occurs, function should return -1

function lastIndexOf(array, number) {
  let output = 0;
  let match = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      output = i;
      match = true;
    }
  }
  if (match) {
    return output;
  } else {
    return -1;
  }
}

//smartGarbage
const smartGarbage = function (trash, bins) {
  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  return bins
}



//concatenate arrays
// The function should, when given two arrays, concatenate the arrays together.
const concat = function (array1, array2) {
  const newArray = array1.concat(array2);
  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);

// The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.

// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

const range = function (start, end, step) {
  let newArray = [];

  if ((start > end) || (step <= 0) || (step === undefined) || (start === undefined) || (end === undefined)) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      newArray.push(i)
    }
    return newArray;

  }
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let rows = 0; rows < numbers.length; rows++) {
  for (let columns = 0; columns < numbers[rows].length; columns++) {
    if (numbers[rows][columns] % 2 === 0) {
      numbers.push("even");
    } else {
      numbers.push("odd");
    }
  }
}

console.log(numbers)


/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `bills` and `totals`
* - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
* - Your `totals` array should be an array of numbers
* - Your code should print the `totals` array to the console
* - The output must be as described above. 
*/

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);
  return element;
});

console.log(totals);









/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function (test) {
  if (test[i] % 3 === 0) {
    test[i] += 100;
  }
})

console.log(test)

/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";








// * QUIZ REQUIREMENTS
// * - Your code should have a function `hasEnoughPlayers()`
// * - Your function `hasEnoughPlayers()` should accept one parameter
// * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
// * - Return true if the array size is atleast 7, otherwise false. 
// */


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

hasEnoughPlayers = function (team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}


var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];


* Use only the splice() method to modify the rainbow variable:
* - remove "Blackberry"
  * - add "Yellow" and "Green"
    * - add "Purple"
      * /

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
var editRainbow = rainbow.splice(2, 1, "Yellow", "Green");
var finalRainbow = editRainbow.splice();

console.log(editRainbow);
console.log(finalRainbow);





const udaciFamily = ["Julia", "James", "Ricka"];
console.log(udaciFamily);


//formula
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  };
  return (length * width);
};

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  };
  return base * height / 2
};

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  };
  // π × radius2
  return Math.PI * Math.pow(radius, 2);
};





//how many 100's will fit into a number
function howManyHundreds(number) {
  return Math.floor(number / 100);
}





//x marks the spot
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const fina index = function (moves) {
  //starting index has coordinates [0,0] on graph
  let posit = [0, 0];
  // for...of loop: for (const element of array)
  for (let direction of moves) {
    //values of +1 or -1 based on the x (east, west),y (north, south) coordinates direction
    switch (direction) {
      case "north":
        //value pushed into starting starting coordinate
        posit[1] += 1;
        break;

      case "south":
        posit[1] -= 1;
        break;

      case "west":
        posit[0] -= 1;
        break;
      case "east":
        posit[0] += 1;
        break;
    }
  }
  //return final index 
  return posit;
}
fina index(moves);




Stations Activity
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
//good stations have at least 20 capacity
// stations can be schools orcommunity centers

function chooseStations(stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1];

    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations
}
chooseStations(stations);


// * Programming Quiz: Inline Functions (5-6)
// */

// /*
// * QUIZ REQUIREMENTS
// * - Your code should have an `emotions()` function
// * - Your code should call the `emotions()` function
// * - Your `emotions()` function call should have an inline function expression passed as the second parameter
// * - Your function expression should return the expected output
// */


// // don't change this code
// // emotions() function definition
// function emotions(myString, myFunc) {
//    console.log("I am " + myString + ", " + myFunc(2));
// }

// // your code goes here
// // Call the emotions() function with two arguments
// // Argument 1 - "happy" string
// // Argument 2 - an inline function expression

// var laugh = function haHa (number) {
//   let message = "ha";
//   for (let i = 1; i < number; i++) {
//       message += "ha";
//   }
//   return message + "!";
// };

// //calling the function 
// emotions("happy", haHa(2)); // you can use your laugh function from the previous quizzes

// * QUIZ REQUIREMENTS
// * - Your code should have a variable `cry`
// * - Your code should include a named function expression stored in the variable `cry`
// * - Your code should call the function expression using the variable name, not the function name
// * - Your function expression should return the expected output
// * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
// */

// var cry = function booHoo(num) {
//   return "boohoo!"
// };



// * QUIZ REQUIREMENTS
// * - Your code should have a variable `laugh`
// * - Your code should include an anonymous function expression stored in the variable `laugh`
// * - Your anonymous function expression should take one argument
// * - Your anonymous function expression should return the correct number of `hahaha`\'s
// */


// var laugh = function (number) {
//   let message = "ha";
//   for (let i = 1; i < number; i++) {
//       message += "ha";
//   }
//   return message + "!";
// };

// console.log(laugh(3));


// function ageCalculator(name, yearOfBirth, currentYear) {
// const currentAge = currentYear - yearOfBirth;
// return `${name} is ${currentAge} years old.`
// };





//  * QUIZ REQUIREMENTS
//   * - Your code should have a`buildTriangle()` function* - Your`buildTriangle()` function should take one argument(or you can say parameter)
//     * - Your`laugh()` function should build the triangle as describe above
//       * /


// function makeLine(length) {
//   let line = "";
//   for (let j = 1; )
// }



// //returns number of laughs based on num
// function laugh(num){
//   const str = "ha ";
//   return str.repeat(num) + "!";
// }
// console.log(laugh(5))


// function laugh(){
//   return "hahahahahahahahahaha!";
// }
// console.log(laugh());


// const amounts =[61.00, 52.25, 112.99, 5.00];
// let total = 0;
// for (let i = 0; i < amounts.length; i++){
//   total += amounts[i];
// } 
// console.log(`Order total is:`, total);


// * Programming Quiz: Find my Seat (4-8)
// * 
// * Write a nested for loop to print out all of the different seat combinations in the theater.
// * The first row-seat combination should be 0-0 
// * The last row-seat combination will be 25-99
// * 
// * Things to note: 
// *  - the row and seat numbers start at 0, not 1
// *  - the highest seat number is 99, not 100

// for (row = 0; row <= 25; row ++){
// for (let seat = 0; seat <= 99; seat++) {
//   console.log(`${row}-${seat}`);
// }
// }








// //factorial of  12! (12 * 11* 10...)
// let solution = 1;

// for (let i = 1; i <= 12; i++) {
//   solution *= i;
// }

// console.log(solution);


// // rewrite the while loop as a for loop
// var x = 9;
// while (x >= 1) {
//     console.log("hello " + x);
//     x = x - 1;
// }


// for (x = 9; x>= 1; x--) {
//   console.log(`hello ${x}`);
// }










// let num = 60;
// while (num >= 0){
//   // Orbiter transfers from ground to internal power (T-50 seconds)
// if (num === 50) {
//   console.log("Orbiter transfers from ground to internal power");
//   // Ground launch sequencer is go for auto sequence start (T-31 seconds)
// } else if (num === 31){
//   console.log("Ground launch sequencer is go for auto sequence start");
//   // Activate launch pad sound suppression system (T-16 seconds)
// } else if (num === 16) {
//   console.log("Activate launch pad sound suppression system");
// }  // Activate main engine hydrogen burnoff system (T-10 seconds)
// else if (num === 10) {
//   console.log("Activate main engine hydrogen burnoff system");
//     // Main engine start (T-6 seconds)
// } else if (num === 6){
//   console.log("Main engine start");
//     // Solid rocket booster ignition and liftoff! (T-0 seconds)
// } else if (num === 0) {
//   console.log("Solid rocket booster ignition and liftoff!");
// } else {
//   console.log(`T-${num} seconds`)
// };
// num --

// }












// var num = 99;

// while (num >= 1) {
//   if (num === 2){
//     console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottle of juice on the wall!`);
//     } else if (num === 1) {
//       console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
//     } else {
//       console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
//     };
//     num --
//   }



// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.


// const whichSchool = function (age) {
//   // Elementary School if age is below 13
//   if (age < 13) {
//     return "Elementary School";
//     // Secondary School if age is between 13 and 18 (both inclusive)
//   } else if (age >= 13 && age <= 18) {
//     return "Secondary School";
//     // Lighthouse Labs in all other cases.
//   } else {
//     return "Lighthouse Labs"
//   }

// }



// console.log("I am 35. Which school should I go to?");
// console.log(whichSchool(35));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 14. Which school should I go to?");
// console.log(whichSchool(14));



// var x = 1;

// while (x<=20) {
//     // check divisibility
//     if ((x % 3 ===0) && (x % 5 === 0)) {
//       console.log("JuliaJames");
//     } else if (x % 5 === 0) {
//       console.log("James");
//     } else if (x % 3 ===0) {
//       console.log("Julia");
//     } else {
//       console.log(x);
//     };

//     x ++;
//     // print Julia, James, or JuliaJames
//   }














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


