// => Data types
// => Variables and typesof
// => Date
// => Loops
// => Conditions
// => Operaters
// => Indexing
// => Math
// => Object and Arry

// Array in Depth and for of loop
// Array Methods
// let names=["Raviraj", "Gunjan", "Mithali", "Anupama", "Kamal"];
// console.log(names);
// console.log(names.length);  // Length of Array

// console.log(names[3]);
// console.log(names[names.length - 1]);

// names[4] = 'Anuj';
// console.log(names);

// let names = new Array('Name1', 'Name2');  // A way to decalare a array but not recommended 
// console.log(names);

// Push => Insert new values inside the Array
// names.push('Arun');
// console.log(names);

// Slice
// let names=["Raviraj", "Gunjan", "Mithali", "Anupama", "Kamal"];
// console.log(names.slice(1,4));

// Splice
// let fruit = ['Apple', 'Banana', 'Mango', 'Gavava'];
// fruit.splice(2, 1, 'Graps', 'Orange');
// console.log(fruit);

// Concatenation
// let arr1 =[1,2,3,4];
// let arr2 =[4,5,6,7];
// let arr3= [6,7,6,7,7,7,7,7,7,7];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// fill
// let arr4=[1,2,3,4,5,6,7,8,9];
// arr4.fill('raviraj, 2, 4);
// arr4.fill('Raviraj', 'Gunjan', 2, 4);   //find the reson why output is change (HW)
// console.log(arr4);

// Include
// let num=[1,2,3,4,5,6,7,8];
// console.log(num.includes(7,6));    // includes(Value, Indexnum)
// console.log(num.includes(7,7));

// indexOf
// let num=[1,2,3,'Raviraj',4,5,6,7,8,'Raviraj','Raviraj'];
// // console.log(num.indexOf(7));
// console.log(num.indexOf('Raviraj'));

// isArray()
// let num=[1,2,3,'Raviraj',4,5,6,7,8,'Raviraj','Raviraj'];
// let num1='Raviraj';
// console.log(Array.isArray(num));
// console.log(Array.isArray(num1));

// join
// let Arr1 = [1,2,3,4,5,6,7,8];
// console.log(Arr1.join(' '));
// console.log(Arr1.join('and'));

// let Arr1 = [1,2,3,4,5,6,7,8];
// let var1 = Arr1.join(' 1 ');
// console.log(var1);
// console.log(typeof var1);

// Keys
// for of

// lastindexof
// let num=[1,2,3,'Raviraj',4,5,6,7,8,'Raviraj','Raviraj'];
// console.log(num.lastIndexOf('Raviraj'));

// Map
// let maths = [1,4,9,16,25];
// console.log(maths.map(Math.sqrt));
// // console.log(maths);

// pop =>removing the last item from the array
// let maths = [1,4,9,16,25];
// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths = [1,4,9,16,25];
// console.log(maths.reverse());

// shift()  =>removing the first item from the array
// let maths = [1,4,9,16,25];
// console.log(maths.shift());

// sort
// let names=["Raviraj", "Gunjan", "Mithali", "Anupama", "Kamal"];
// console.log(names.sort());
// console.log(names.reverse(names.sort()));

// unShift
// let fruit = ['Apple', 'Banana', 'Mango', 'Gavava'];
// // console.log(fruit.unshift('Apple', 'Grapes'));
// fruit.unshift('Apple', 'Grapes');
// console.log(fruit);

// Converting to Array
// let name = 'Ravi Raj';
// let array1 = name.split('');
// console.log(array1);

// for of
// let fruit = ['Apple', 'Banana', 'Mango', 'Gavava'];
// let Upperfruit =[];  // Empty Array
// for(const uppercase of fruit){
//     Upperfruit.push(uppercase.toUpperCase());
// }
// console.log(Upperfruit);

// Break and Continue
// for (let i=0; i<=5; i++){
//     if (i==3){
//         break;  // Terminate every thing and come out of the block
//     }
//     console.log(i);
// }

// Continue
// for (let i=0; i<=5; i++){
//     if (i==3){
//         continue; // skip the comparison
//     }
//     console.log(i);
// }

// Array Method in JavaScript and Write a Blog on it. =>(mandatory*)