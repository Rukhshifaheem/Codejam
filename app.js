
// Codejam:Q#1
let num = [2, 4, 6, 8, 10, 12, 14]
function revNum() {
    newNum = num.reverse();
    console.log(newNum);
    return
}
revNum(); 

// Codejam:Q#2
function negVal() {
    let array =[];
    for(i=0; i<8; i++) {
        let input = +prompt("Enter a number")
        array.push(input);
    }
    let filteredArray = [];
    for(i=0; i < array.length; i++) {
        if(array[i] >= 0) {
            filteredArray.push(array[i])
        }
    }
    console.log(filteredArray);
    return filteredArray;
}
negVal();

// Codejam:Q#3
function vowel() {
    let string1 = prompt("Enter any string");
    let count = 0
    for (i=0; i<string1.length; i++) {
        if (string1[i] === "a" || string1[i] === "e" || string1[i] === "i" || string1[i] === "o" || string1[i] === "u") {
            count++;
        }
    }
    console.log("Vowel count: " + count);
}
vowel();

// Codejam:Q#4
function isPalindrome(str) {
const reversedStr = str.split('').reverse().join('');
if (str === reversedStr) {
    console.log(str + " is palindrome.")
}
else {
    console.log(str + " is not a palindrome.")
}
}
isPalindrome("noon");

// Codejam:Q#5
function isInRange(num1, num2) {
if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99) {
    console.log(true);
}
else {
    console.log(false);
}
}
isInRange(43, 35);

// Codejam:Q#6
let arr = [1, 2, 3, 4, 5];
function mapFn(x) {
    return x*2
}
let mappedArray = arr.map(mapFn);
let minValue = Math.min(...mappedArray);
console.log(minValue);

// Codejam:Q#7 
function updatedString() {
    let str = prompt("Enter a string");
    if(str.length < 4) {
        console.log("The string length must be 3 or more.");
    }
    let updatedString = str.slice(-3);
    let newStr = updatedString.repeat(4);
    console.log(newStr);
}
updatedString();

// Codejam:Q#8
function angleType() {
    let angle = +prompt("Enter an angle in degrees:");
    if (angle > 0 && angle < 90) {
        console.log("Acute angle"); 
    } else if (angle === 90) {
        console.log("Right angle"); 
    } else if (angle > 90 && angle < 180) {
        console.log("Obtuse angle"); 
    } else if (angle === 180) {
        console.log("Straight angle"); 
    } else {
        console.log("Invalid angle"); 
    }
}
angleType();

// Codejam:Q#9
function round(value) {
    let roundedValue = Math.ceil(value/10) * 10;
    console.log(roundedValue);
    return roundedValue
}
round(574);

// Codejam:Q#10
let array = ["apple", "banana", "cherry", "mango", "peach"];
function searchItem() {
let fruit = prompt("what fruit do you want?")
let found = false;
for(let i=0; i<array.length; i++) {
    if(fruit === array[i]) {
        console.log(fruit + " is on index " + i)
        found = true;
        break;
    }
}
    if(!found) {
    console.log(fruit + " is not available")
    }
}
searchItem();
