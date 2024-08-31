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
    console.log(e,f)
    
}
abcd()


// var add itself in window obj which is highly insecure for data privacy thats why let and const 
//were introduced which if defined in script.js will not add themself in window obj