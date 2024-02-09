function getdata(id,getdata){
    setTimeout(()=>{
        console.log("data of",id)
        if(getdata){
            getdata()
        }
    },3000)
}
//callback
// function callback(id,getdata){
//    getdata(id)
// }
// callback(1007,getdata)

//call back hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3)
//     })
// })

//promise

// function database(id){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data of",id)
//         resolve("sucess")
//     }
//     ,3000)
//    })
// }
// database(1).then(()=>{
//     return database(2)
// }).then(()=>{
//     return database(3)
// })

//async and await iife
function database(id){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data of",id)
            resolve("sucess")
        }
        ,3000)
       })
    }
(async function fun(){
    await database(1)
    await database(2)
    await database(3)
})()