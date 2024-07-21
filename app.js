// Question#01
let numbers = [25, 26, 27, 28, 29, 30, 31]
console.log(numbers)
function rever() {
    console.log(numbers.reverse())
}
rever();

// Question#03
count = 0
function vowels() {
    let input = prompt("Enter a string")
    for (let i=0; i < input.length; i++)
        if(input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u")
        count += 1
        console.log(count);
}
vowels();

// Question#04
let str = "Rukhshi"

// Question#05
function int() {
    let num1 = +prompt("Enter first number")
    let num2 = +prompt("Enter second number")
    if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99){
        console.log(true)
    }
    else {
        console.log(false)
    }
    return
}
int();

// Question#06
let arr = [23, 45, 15, 13, 98, 31]
function value() {
    let newArr = arr.sort();
    console.log(newArr[0])
    return
}
value();

// Question#07

// Question#08
function angle() {
    let angle = +prompt("Enter degree for an angle and you will get type of an angle")
    if(angle >= 0 && angle < 90) {
        console.log(angle + " is an acute angle")
    } 
    else if(angle === 90) {
        console.log(angle + " is a right angle")
    } 
    else if(angle > 90 && angle < 180) {
        console.log(angle + " is an obtuse angle")
    } 
    else if(angle === 180) {
        console.log(angle + " is a straight line")
    } 
    return
}
angle();


// Question#09
function round() {
    let val = +prompt("Enter a number which you want to round off")
    newVal = Math.ceil(val)
    console.log(newVal)
}
round();
// Question#10
let item = ["biscuit", "cookie", "chips", "cake", "pastry", "juice"]
let userInput = prompt("Enter a bakery item")
for (i=0; i<item.length; i++) {
    if (userInput === item[i]) {
    console.log(userInput  + " is on index " + item.indexOf(userInput))
    }
    else {
        console.log("Item is not present")
    }
}
