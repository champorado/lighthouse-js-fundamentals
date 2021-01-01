//trash to treasure
const smartGarbage = function (trash, bins) {
  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  };
  return bins
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


//lastIndex() experiment code - wrong answer
// const lastIndexOf = function (array, num) {
//   let indexNum = 0;
//   for (l,
let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       indexNum = i;
//     }
//   };
//   //indexNum = 0  is falsy, which does not execute return indexNum code
//   if (indexNum) {
//     return indexNum;
//   } else {
//     return -1;
//   }
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);
// console.log(lastIndexOf([3], 3), "=?", 0);


// const director = "Steven Spielberg";
// const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

// console.log("My favorite " + director + " film is " + films[1]);

// const sayHello = function (name){
//   console.log("Hello, "+ name);
// }

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");
// sayHello()

