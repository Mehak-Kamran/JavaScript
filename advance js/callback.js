//call back
// function sum (a,b,sum){
//     return console.log(a+b)
// }
// function para(a,b,sum){
//     sum(a,b)
// }
// para(1,2,sum)

// function minus (a,b){
//     return console.log(a-b)
// }
// function cal(a,b,minus){
//     minus(a,b)
// }
// cal(5,1,minus)

//callback hell

// function database(id,database){
//     setTimeout(()=>{
//        console.log("data of",id)
//        if(database){
//         database()
//     }
//     },2000)
    


// }
// console.log("getting next data 3004")
// database(3004,()=>{
//     console.log("getting next data 3005")
//     database(3005,()=>{
//         console.log("getting next data 3006")
//         database(3006,()=>{
//             console.log("getting next data 3007")
//             database(3007)
//         })
//     })
// })


//promise 
// function database(id,database){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        console.log("data of",id)
//        resolve("success")
//        if(database){
//         database()
//     }
//     },5000)})
// }
    
// function getdata(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",id)
//             resolve("success")
//         },3000)

//     })
// }

// getdata(1).then((res)=>{
//      return getdata(2)
// }).then((res)=>{
//     return getdata(3)
// }).then((res)=>{
//     console.log("success")
// })

    
//asyn await

function api(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data of",id)
            resolve("success")

        },3000)


    })
}

(async function fun (){
    console.log("fetching data1.......")
    await api(1)
    console.log("fetching data2.......")
    await api(2)
    console.log("fetching data3.......")
    await api(3)
    console.log("fetching data4.......")
    await api(4)
 })();


