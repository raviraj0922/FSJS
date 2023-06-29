// conditions
// if and else
// switch case
// Ternary operator/Ternary conditions

// Rating mini app

// let rating =7;
// if (rating == 5){
//     console.log('5 stars');
// }else if(rating ==4){
//     console.log('4 stars');
// }else if(rating ==4){
//     console.log('3 stars');
// }
// else{
//     console.log('i am else');
// }

// Switch Case

// let user = 'admin';
// switch (user){
//     case "admin":
//         console.log("Redirect him/her to the Admin page");
//         break;
//     case "mentor":
//         console.log('Redirect him/her to the mentor page');
//         break;
//     default:
//         console.log('I am Simple user');
// }

// Ternary operator/ Ternary Condition
// Condition? True:False
// let raining = false;
// raining ? console.log('It is raining') : console.log('It is not Raining');
// Example
// let userlogin = true;
// userlogin ? console.log('logout') : console.log('login');

// Array (to access any thing in object we can use [])
// let name=["Ravi Raj", "Gunjan", "Mithali", "Anupama", "Kamal", "Arun", "Anuj", "Priti"];
// console.log(name);
// console.log(name[3]);

// Object (to access any thing in object we can use .)
// let bankaccount ={
//     firstname: 'Mithali',
//     lastname: 'Chauhan',
//     Mobileno: 8887849390,
//     balance: 10000,
// };
// console.log(bankaccount);
// console.log(bankaccount.balance);

// Date and Maths
// const now = new Date();
// console.log(now.toString());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());

// console.log(now.getTime());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// Maths
// const PI=Math.PI;
// console.log(PI);
// console.log(Math.round(PI));
// console.log(Math.round(9.5));
// console.log(Math.floor(9.5));
// console.log(Math.ceil(9.5));

// Minimum and Maximum
// console.log(Math.min(10, 1, 2, 3, 5));
// console.log(Math.max(10, 1, 2, 3, 5));

// Random (0-1)values between
// console.log(Math.round(Math.random()*10));

// Mathematics Values
// console.log(Math.pow(3,2));
// console.log(Math.log(2));
// console.log(Math.sin(90));

// loops
// do while, while, for

// let i = 6;
// do{
//     console.log('Value of i is :', i);
//     i++;
// }while(i <= 5);

// let j=6;
// while(j<=5){
//     console.log('Value of j is', j);
//     j++;
// }

// for loop
// for (let i=0; i<=5; i++){
//     console.log('Value of i is', i);
// }
for(let i=0; i<=5; i++){
    console.log(`${i}*${i}=${i*i}`);
    // console.log(i, i, i*i);
}
