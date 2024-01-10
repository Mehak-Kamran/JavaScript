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
 min=(num1,num2)=>{
    return num1-num2
}
//console.log(min(1,1))










