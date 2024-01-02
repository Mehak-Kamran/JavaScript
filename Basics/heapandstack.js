//stack is used for premtives and a copy is sent not original
let employeeid1=1003
let employeeid2=employeeid1
console.log(employeeid1,employeeid2)
employeeid2=1005
console.log(employeeid1,employeeid2)//hence data is not changed

//heap is used for nonpremtive AND original data is used
let user1={
    name:'hash',
    email:'hash66@gmail.com'
}

let user2=user1
console.log(user1.email,user2.email)

user2.email='jombo56@yahoo.com'
console.log(user1.email,user2.email)//hence data is changed




