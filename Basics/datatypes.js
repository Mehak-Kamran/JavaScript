"use strict";// treat all code as new version of js
//alert (3+3)// on browser not here 

//string
let name="Beluga"
//number
let age=12
//undefined
let address;
//object
let salary=null

//bool
let married=false

//printing
console.log(name,age,address,salary,married)

//finding the type
console.log(typeof(salary))
console.log(typeof(married))

// more over 
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//conversion of no into string  success
let weight=68
let  weightinstring= String (weight)
console.log(typeof(weightinstring))
console.log(weightinstring)

//conversion of string into n0  notsucess
let lastname="suchita"
let lastnameconversion=Number(lastname)
console.log(typeof(lastnameconversion))
console.log(lastnameconversion)

//bool to no success 
let marriedtono=Number(married)
console.log(typeof(marriedtono))
console.log(marriedtono)
// not suceess
let password="33abf" 
let passwordintonotry=Number(password)
console.log(typeof(passwordintonotry))
console.log(passwordintonotry)