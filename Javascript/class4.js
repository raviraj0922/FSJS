// Datatypes => number, string, boolean, null and undefined
// Aarry and object

// operators
// conditions
// if, if else, switch and ternary condition
// loops=> do while, while loop for loop
// math and date
// Array and method => Assinment to write Article
// for of => Array and for in => Object

// Topic: Function
// function sum(value1, value2){   
//     // Defination of function
//     // let num1=16;
//     // let num2=25;
//     // console.log('Addition of two numbers are:',num1 + num2);
//     console.log('Addition of two numbers are:',value1 + value2);
// }
// sum(16, 25);      // Call function once
// sum(52, 61);      // Call again
// sum(10, 11);      // Call again
// sum(10, 20);      // Call again
// sum(75, 85);      // Call again
// sum(30, 67);      // Call again

// let a='Ravi raj';
// let b=40;
// console.log(a+b);

// Normal funtion and function with parameters

// function with return type
// function sum(valu1, valu2){
//     let result = valu1+valu2;
//     return result;
// }
// let add = sum(10,25);
// console.log(add);

// let add1 = sum(10, 43);
// console.log(add1);

// HW create the calculater in the .js (add, multi, sub, divi, modul)

// string
// function URL(url, domain){
//     let conect= "https://";
//     let result = conect + url + domain;
//     return result;
// }
// let Raviraj = URL('raviraj', '.me');
// console.log(Raviraj);
// // console.log(URL('raviraj, '.me));

// function sum(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){    // HW try with for..of
//         sum = sum+arr[i];
//     }
//     return sum;
// }
// let sumarray = [1,2,3,4,5,6,7,8,9];
// let arrresult = sum(sumarray);
// console.log(arrresult);

// function mithali(){
//     // Arguments (by default it creates memory)
//     // console.log(arguments); // output with the arguments
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(mithali(7,8,9,10,11,12,13,14));

// let mithali = () => {
//     console.log('cute baby girl');
// };
// mithali(1,2);

// let mithali = (valu1, valu2) => {
//     console.log('cute baby girl', valu1, valu2);
// };
// mithali(1,2);

// let mithali = () => {
//     console.log('Mithali');
// };
// mithali();

// object
// let userName={
//     firstname: 'Ravi Raj',
//     lastname: 'Singh',
//     role: 'admin',
//     loginCount: 25,
// };
// console.log(userName);
// // console.log(userName.role);  // recomended
// // console.log(userName['role']); // not recomended
// userName.loginCount = 61;
// console.log(userName);

// for in
let userName={
    firstname: 'Ravi Raj',
    lastname: 'Singh',
    role: 'admin',
    loginCount: 25,
};
// for(let x in userName){
//     // console.log(x);
//     console.log(userName[x]);
// }
for(const x in userName){
    // console.log(x);
    console.log(userName[x]);
}