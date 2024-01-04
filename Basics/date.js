//date
let mydate=new Date()
console.log(mydate.toDateString())//DATE
console.log(mydate.toLocaleString())// DATE AND TIME
//type of date is object
console.log(typeof mydate)
//we can also create our own date there are diffrent formats to write 
 //let createmydate=new Date(2023,0,3)
// let createmydate=new Date(2023,0,3,3,20)
let createmydate=new Date('01-28-2024')
console.log(createmydate.toLocaleString())

//timestamp
let mytimestamp= Date.now()
console.log(createmydate.getTime())
