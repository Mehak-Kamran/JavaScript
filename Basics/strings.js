//how to write a string
// let name='mehak'
// let subject='javascript'
// console.log(`hi my name is ${name} and I love ${subject}`)// use this symbol  `

//methods simple string
// let lastname= new String ('kamran')
// console.log(lastname.toUpperCase())
// console.log(lastname.length)
// console.log(lastname.charAt(2))
// console.log(lastname.indexOf('m'))
// console.log(lastname.substring(0,3))// substring cannot take any neg value
// console.log(lastname.slice(-5,4))//slice can take neg value
//trim
// let fname='       Siddiqui '
// console.log(fname)  
// console.log(fname.trim())

//replace
let url='mehakkamran56@gmail.com'
console.log(url.replace('56','52'))

//include
// const market_list=['apple','dahi','pen']
// console.log(typeof(market_list))// array  type is object and these method is applied on strings only , wheather array is string array 
// console.log(market_list.includes('chips'))
console.log(url.includes('get'))
console.log(url.split('@'))






