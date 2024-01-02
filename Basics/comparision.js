//simple usage with no 
console.log(2>3)
console.log(2==3)
console.log(2>=3)

//complicated with string ,null and undefined and not advised to use
console.log(2>'3')
console.log(2>='3')
console.log(2=='3')
console.log(0<=null)//true cause js will treat null as 0 and hence one condition will match and output will be true
console.log(0<=undefined)
//strict use
console.log(7===7)
console.log(2==='2')//false cause of strict checking of datatype
console.log(2=='2')//true 
