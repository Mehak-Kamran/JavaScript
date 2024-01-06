 function addtwonum(num1,num2){
    return num1+num2
    }
    console.log(addtwonum(2,1));



// function loginmessage(username="someone"){
//     return `${username} has logged in`
// }


// console.log(loginmessage('ash'))
// console.log(`${username} has logged in`)


//return
function loginmessage(username){
    if(!username){
        console.log("please enter username");
        return
       
 }

    return `${username} has logged in`
}

console.log(loginmessage())

//ifelse
function loginmessage(username){
    if(!username){
        return"please enter username"
       
 }
 else
    return`${username} has logged in`
}
console.log(loginmessage('ash'))

//
function biasapp(userbias){
    if(userbias){
        return `${userbias} is your bias and the qualities are:`
    }
    else 
          return'Please enter your Bts bias name'
          
}


console.log(biasapp('jimin'))

function multiply(...num1){
    return num1
}
console.log(multiply(2,4,5,6,7,8))

let user={
    idno:345,
    ename:"fazal"

}
function print(anyObject){
    console.log(user.idno);

}
print(user)

//myarray=[100,4,6]
function callarray(myarray){
    console.log(myarray[1]);

}
callarray([100,2,5])