// //singleton object or constructor obj
// // const score=new Object()
// // score.id=1005
// // score.name="ayesha"
// // console.log(score);


// // const Name={
// //     id:1006,
// //     username:{
// //         fullname:{
// //             firstname:"mak",
// //             lastname:"kam"
// //         }
// //     }
    
// // }
// // console.log(Name.username.fullname.firstname);
// let BTS={
//     groupname:'BTS',
//     genre:"Hiphop",
//     members:7
// }
// let BP={
//     BPgroupname:'BP',
//     BPgenre:"Hiphop",
//     BPmembers:4
// }
// // let KPOP=Object.assign({},BP,BTS)
// // console.log(KPOP);

// //OR U CAN ALSO DO THIS SPREAD THING 

// let KPOP={...BTS,...BP}
// console.log(KPOP)
// let user1=[
//     {id:235,name:'holo'},
//     {id:25,name:'lo'}
// ]
// console.log(user1[1].name)
// //some meythods
// console.log(Object.keys(BTS))
// console.log(Object.values(BTS));
// console.log(Object.entries(BTS))

// console.log(BTS.hasOwnProperty('groupname'));

//OBJECT DESTRUCTURING

const course={
    cname:'maths',
    cfees:5000,
    cinstructor:'alex'

}


//alternateway through destructuring
const {cinstructor:instruc}=course
//console.log(cinstructor);
//or 
console.log(instruc);


// api is just a menu card in json format
//json format
{

}
//json can be in array so the format of json can also be
arr=[
    {},
    {}
]




















