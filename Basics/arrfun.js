//this refers to the current scope
 

 BTS={
    name:"Jimin",
    track:"like crazy",
    welcome:function(){
       console.log(this.name);

    }
    
 }
// BTS.welcome()

//arrow function
const eg=(num1,num2)=>(num1+num2)//implicit arrow function
//console.log(eg(1,2))

//explicit arrow func
//console.log(min(1,1))
 min=(num1,num2)=>{
    return num1-num2
}
console.log(min(1,1))

//In normal  func hoisting can be done but in arrow func you can not do hoisting

//normal func
function paint(){
    sketch="duck"
    console.log(this.sketch);
}
paint()

//arrow func
calli=()=>{
    sketch="picasso"
    console.log(this.sketch)
}
calli()
//this cannot be used in arrow func










