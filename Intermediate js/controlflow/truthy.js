useremail=undefined
if(useremail){
    console.log("true");
}
else{
    console.log("false");
}
//truthy falsy
//falsy=== false,0,'',null,undefined,NAN,-0,BIGINT 0N
//TRUTHY ===ALL remaing are truthy values including "false","0" " ", [], {}, function(){}


// null coalscing operator
no=null ?? 4
console.log(no);
no=10 ?? 4
console.log(no);// used when database is involved

//ternary operator
 age=32
 age>=50 ? console.log("false") : console.log("true");