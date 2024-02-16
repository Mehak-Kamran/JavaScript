button=document.querySelector(".bttn")
console.log(button)
item=document.querySelector(".item")
todo=document.querySelector(".todo")


button.addEventListener("click",(event)=>{
    console.log("button was clicked")
    console.log(item.value)
    
    if(item.value!=""){
        console.log("You have entered some text")
        
        newli=document.createElement("li")
        style(newli)
        
        let msg=item.value
        console.log(msg)
        newli.innerText=msg;
        todo.appendChild(newli)
        item.value=""
    }
    else{
        console.log("Enter some text")
    }
    
    
})


function style(newli){
        newli.style.backgroundColor="#FFE7E7";
        newli.style.margin="6px"
        newli.style.width="80%"
        newli.style.borderRadius="6px"
        newli.style.textAlign="left"
        newli.style.padding="3px"
}