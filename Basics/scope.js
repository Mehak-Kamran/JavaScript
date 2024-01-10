var a=300
if(1){
   var a=3
let b=4
const c=5
console.log(a);
}


//console.log(b);//error
//console.log(c);//error
console.log(a);

//nested if scoping 
//hoisting
add1(2)
function add1(no){
   return no+1
}
//add1(2)
add2(2)//error , that is called hoisting
let add2=function (no){
   return no+1
}
//add2(2)
