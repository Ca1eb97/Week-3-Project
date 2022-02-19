//1. Array for age//
let age = [];
age.push(3);
age.push(9);
age.push(23);
age.push(64);
age.push(2);
age.push(8);
age.push(28);
age.push(93);

//1a. subtracting the first age element from the last age element, expect result = 90 // 

console.log(age.slice(-1) - age[0]);

//1b. Adding the new age to the array to test previous calculation//

age.push(age.slice(-1) - age[0]);
console.log(age);

//1c. Loop to iterate array and average age calculation, expected result: 35.5556 //
let ageAdded = 0;
for (var i = 0; i < age.length; i++) {
    ageAdded += age[i];
}
console.log(ageAdded / age.length);

//2. Array for names//
let names = [];
names.push("Sam");
names.push("Tommy");
names.push("Tim");
names.push("Sally");
names.push("Buck");
names.push("Bob");





//2a. Loop to iterate array and calculate average number of letters, expected result: 3.83333 //
let average = 0;
for (i = 0; i < names.length; i++) {
    average = average + names[i].length;
} console.log(average / names.length);

//2b. Loop to iterate array again and link names together with space. //

for (i = 0; i < names.length; i++) { console.log(names.join(" ")) };


//5. Array nameLengths, loop to iritate previous name array and add the length of each name to this array.//

let namesLength = [];
for (let i = 0; i < 1; i++) { namesLength.push(names[0].length, names[1].length, names[2].length, names[3].length, names[4].length, names[5].length) };
console.log(namesLength);


//6. Loop to iterate over nameLengths array and calculate the sum of all the elements in it. Expected result = 23 //
let totalSum = 0;
for (let i = 0; i < namesLength.length; i++) { totalSum += namesLength[i] };
console.log(totalSum);

//7. Function with parameters: word and n, word will be mutiplied by n //

function withTwoParameters(word, n) {
    let fill = ""; for (let i = 0; i < n; i++) { fill += word; }
    return fill;
}
console.log(withTwoParameters("High", 4));

//8.Function with parameters: firstName and lastName, returns fullName //

function fullName(firstName, lastName) { console.log(firstName + " " + lastName) };
fullName("John", "smith");

//9. function that takes an array of numbers and returns true if the sum is greater than 100.//


let array3;
function arraySum(array3) {
    for (i = 0; i < array3; i++) { array3 = array3[i].length };
    if (array3 > 100) {
        return true;
    }
    else {
        return false;
    }
};
console.log(arraySum([2, 3, 5, 7]));


//10. function that takes an array of numbers and averages all of the elements. (expected result 3)//
let array;
let all = 0;
function arrayAverage(array) {
    for (let i = 0; i < array.length; i++) {
        all += array[i]
    };
    { return (all / array.length) }
};

console.log(arrayAverage([1, 2, 3, 4, 5]));


//11. function that takes two arrays of numbers and returns true if: the average of the elements in array 1 > the average of the elements in array 2; //
let array1;
let array2;
function arrayAbove(array1, array2) {
    {
        for (let i = 0; i < array1; i++) { array1 = array1[i] / array1.length };
    } {
        for (let i = 0; i < array2; i++) { array2 = array2[i] / array2.length };
        if (array1 > array2) { return true } else { return false };
    }
}
console.log(arrayAbove([1, 2, 3, 4], [1, 2, 3]));





//12. function called willBuyDrink, returns true if isHotOutisde=true and moneyInPocket > 10.5.//
let isHotOutisde;
let moneyInPocket;
function willBuyDrink(isHotOutisde, moneyInPocket) { if (isHotOutside = true && moneyInPocket > 10.50) { return true } else { return false } };
console.log(willBuyDrink(true, 11));

//13. my own function. function to subtract 2 values and log false if the value is negative.//
var x;
var y;
function negative(x, y) {
    if (y > x) { return false } else { return true };
}

console.log(negative(3, 2));
