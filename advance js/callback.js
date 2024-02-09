//callback hell

function database(id,database){
    setTimeout(()=>{
       console.log("data of",id)
       if(database){
        database()
    }
    },2000)
    


}
console.log("getting next data 3004")
database(3004,()=>{
    console.log("getting next data 3005")
    database(3005,()=>{
        console.log("getting next data 3006")
        database(3006,()=>{
            console.log("getting next data 3007")
            database(3007)
        })
    })
})


