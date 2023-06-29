// 7;
// 2.5;
// // both of them are treated as number in java script

// ("Ravi Raj Singh");
// ('Ravi Raj Singh');
// // both of them are treated as string

// true;
// false;
// // boolean values

// null;
// undefined;
// // Empty values

// // Prmitive values / prmitive data type PDT

// // Array and Object
// [1,2,"Ravi Raj",true,'Gunjan'];
//  0 1     2        3     4 => index or key

//  {
//     fname:ravi    //key:value
//     lname:raj
//  }

//  //non-primitive data types=> will more then one value



// Variables => Place holder for value
// in three ways
// var  y = 25; // never use var

// let  x = 25;
// const  z = 'Ravi Raj'; // constant (the value which  dose not change) (ex: bank account number)

// let firstname = 'Ravi';
// let lastname = 'Raj';
// const mobileno = 9015117889;

// console.log('My first name is', firstname);
// console.log('My Last name is', lastname);
// console.log(mobileno, firstname, lastname);

//Tempate Literal

// console.log(`my current first name is ${firstname} ${lastname} ${mobileno}`);

// History
// Basic pillar of an programing language
// values
// data type
// difference bwt primitive and non primitive datatype
// consol.log => How to print somting on terminal
// decalring variable
// Tempalte Literal


// Operator
// Assignment Operator
// let x=11;
// let y=10;

// Arthimetic Operator
// +,-,*,/,(%=>Reminder)
// let z=x+y;
// console.log(z);

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

// Comparision Opertor
// let abc=10;
// let xyz='10';

// console.log(abc>xyz);
// console.log(abc<xyz);
// console.log(abc>=xyz);

// == or ===

// console.log(abc===xyz);

// let y;
// // y=10;
// console.log(y);

// const accno=595890000;  // once declare than we have to assigine a value
// accno=123456789;  // once value has been assigned than we can not change the value

// Conditions

// let age = 17;
// if (age >= 18){
//     console.log('You are allowed inside the park');
// }
// else{
//     console.log('out of the park');
// }

let standard='7';
if (standard == 1){
    console.log('room 1');
} else if(standard ==2){
    console.log('room 2');
}else if(standard==3){
    console.log('room 3');
}else{
    console.log('you are principal');
}