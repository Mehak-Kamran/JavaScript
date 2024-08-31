//var const let

let a=5
var b=1
const c=3

console.log("original values",a,b,c)
a=6
b=2
// c=4
console.log("updated values",a,b,c)//giving error bc of c

function abcd(){
    var d=3 //function scoped
   
    

    if(1){
        const e=4
        let f=5 // braces scoped
        console.log(e,f,d)
    }
    
    
}
abcd()


// var add itself in window obj which is highly insecure for data privacy thats why let and const 
//were introduced which if defined in script.js will not add themself in window obj

//simple function
let fun=function(){
    console.log("one way of defining function")
}
fun()

function xyz(){
    console.log("second way of defining function")
}
xyz()
//arrow function 
let erg=()=>{
console.log("this is arrow function")
}
erg()

//object
var obj={}//blank obj
console.log(obj)
var obj1={
    name:"mak",
    class:2,
    work:function(){
        console.log("study")
    }//method

    
}
console.log(obj1)
console.log(obj1.work)
obj1.name="kam"
console.log(obj1.name)


//obj destructuring
const {name}=obj1
console.log(name)