let button=document.querySelector(".Tbutton")
let current_mode="light"
let body=document.querySelector("body")

button.addEventListener('click',(event)=>{

if(current_mode==="light")
{
    current_mode="dark"
   
   
   body.classList.add("dark")
   body.classList.remove("light")
   

    

}
else{
    
    
    current_mode="light"
    

    body.classList.add("light")
    body.classList.remove("dark")
  


}

}
)





