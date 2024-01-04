//DEFINING ARRAYS
let marketlist=['apple','banana']
let nolist=[2,6]
let fontlist=new Array('F','R')
console.log(marketlist,nolist,fontlist)
//some method
nolist.push(10)
console.log(nolist)
nolist.pop()
console.log(nolist)

nolist.unshift(10)
console.log(nolist)
nolist.shift()
console.log(nolist)

console.log(marketlist.includes('apple'))
console.log(marketlist.indexOf('banana'))

let nooflist=nolist.join() 
console.log(nolist);
console.log(nooflist)

nolist.push(7,4,9)
console.log(nolist);
console.log(nolist.slice(1,4));
console.log(nolist);
console.log(nolist.splice(1,4));
console.log(nolist);


