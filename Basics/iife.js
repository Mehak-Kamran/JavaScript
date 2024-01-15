// //To get rid of global pollution we use IMEDIATELY INVOKE FUNCTION EXPRESSION
// connect=function(){
//     console.log("Database Connected")
// }
// //connect()

// //now we will make an iife 
// connected=(function(){
//     console.log("Database Connected");
// })
// //()

//you can write like this 
(function print(my){
    console.log("hey"+my+"mehak");
}
)("  meaww  ");



