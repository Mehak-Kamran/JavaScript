let button=document.querySelector(".bttn")
let text=document.querySelector("#in")
let k=text.value
let im=document.querySelector(".copy")
console.log(im)


let genranpass= ()=>{

    let collection="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let len=12;
    password=''

     for(i=1;i<=len;i++){

        let index=Math.floor(Math.random()*collection.length)
        pass=collection[index]
        password+=pass
    
     }
     return password;
    

}

button.addEventListener("click",(event)=>{
    console.log(button)
    let output=genranpass()
    console.log(output)
    text.value=output
    
    
})

im.addEventListener("click",(event)=>{
    text.select()
    document.execCommand("copy");
})