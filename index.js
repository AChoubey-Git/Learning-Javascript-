
// this denoted to comment!
console.log('Hrllo World!');
let name = 'Amitav';
console.log(name);
// object declaration
let person = {
    name: 'Amitav',
    age: 25
};
console.log(person);
console.log(person.name);
console.log(person['name']);

//array declaration
let selecteColor = [];
selecteColor = ['red', 'green'];
console.log(selecteColor);

//function
function GetName(name, age) {
    console.log('Hello:' + name + ' Age:' + age);
}
GetName('Amitav Choubey');
GetName('Amitav Choubey', 25);

//function with return statement
function squre(number) {
    return number * number;
}
console.log(squre(4));

//Ternary operator
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);
console.log(false && true);
let userColor = 'red';
let defaultColor = "green";
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Bitwise or & and  operator
// 4 = 0000100
// 2 = 0000010
// 1 = 0000001
// |(OR): 0000110 -> 6
// &(AND):0000000 -> 0
let readPermission = 4;
let writePermission = 2;
let executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let premissionGranted =
    (myPermission & readPermission) ? 'yes' : 'no';
console.log(premissionGranted);

//Swaping variable..
let a = 'red';
let b = 'blue';

//Swap operation:
let temp = b;
b = a;
a = temp;
temp = undefined;

console.log('a = ' + a);
console.log('b = ' + b);

// if else if statement....
let hour = 21;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 20) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

//Switch statement..
let role;
//  Syntex..
//  switch (condition){
//      case 1:
//         //  statement
//         // break;
//     case 2 :
//         // statement;
//         // break;
//     default:
//         // statement
//  }
// loops.....
// for(let i=0;i<10;i++){
//     console.log('Hello world',i);
// }
let i = 0;
//  while(i<5){
//      if(i%2==0)
//         console.log('Hello world',i);
//     i++
//  }
//  do{
//     if(i%2==0)
//         console.log('Hello world',i);
//     i++
//  }while(i<5);

//for in loop
let colors = ['red', 'green', 'yellow'];
for (let color in colors)
    console.log(color, colors[color]);

// for of loop
for (let color of colors)
    console.log(color);

// max of two numbers..
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(2, 3));
// check landscape and portrait
function isLandscape(width, height) {
    return width > height;
}
console.log('Landscape or not:' + isLandscape(320, 380));

// fizzBuzz problem (interview)

function fizzBuzz(input) {
    if (typeof (input) !== 'number') {
        return NaN;
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    }
    else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    }
    return input;

}
console.log(fizzBuzz(true))

//CheckSpeed
function checkSpeed(speed) {
    const speedLimit = 70;
    cons kmToPoints =5;
    if (speed <= speedLimit) {
        return 'ok';
    }
    let point;
    let speedDiff = speed - speedLimit;
    if (speedDiff >= 5) {
        point = (speedDiff / 5);
    }
    if(point >=12){
        return point +' suspended';
    }
    return point +' point';
}
console.log(checkSpeed(50));

