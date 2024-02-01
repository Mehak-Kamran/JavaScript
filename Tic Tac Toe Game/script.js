const disable=()=>{
    for(let i of box){
        i.disabled=true;
    }
}
msg=document.querySelector(".print")
winningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]



turnX=true
box=document.querySelectorAll(".box")
console.log(box)
box.forEach((box) => {
    box.addEventListener("click",(event)=>{
        if(turnX)
        {
        box.innerHTML="X"
        turnX=false
        }
        else{
            box.innerHTML="O"
            turnX=true
        }
        box.disabled=true
        checkwinner();

    })
    
});
const checkwinner=function (){


for(let pattern of winningpattern){
 pos1=box[pattern[0]].innerText
 pos2=box[pattern[1]].innerText
 pos3=box[pattern[2]].innerText

 if(pos1!="" && pos2!="" && pos3!="")
       {
        if(pos1===pos2 && pos2===pos3)
        {
            msg.innerText='Congratulation You are a Winner'
            disable();
        }
       }
  

}

   

  
   }


