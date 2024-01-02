// you should know that there are two major types of datatypes in js
//on basis of how data is stored and accessed we divide data types that is 
//premetives and non premetives
//premetives ==call by value, gives copy , nonpre==call by reference, gives original 
//premetive ==7 no,string,bigint,undefined,null, boolean, symbol(that uniquely identify component)
//nonpre== obj , array , function 
// js is dynamic language because dt is determine by what value they old at runtime 

//==================================codetime======================================================
//array
let array1=['ahmed',5,'bilal']
let array2=['3','ayesha']
console.log(array1,array2)

//object its just like structure in c
let obj1={
    name:'saman',
    age:29
}
console.log(obj1)

// function not working now 
const fun1=function(){
    console.log('hello world')
}