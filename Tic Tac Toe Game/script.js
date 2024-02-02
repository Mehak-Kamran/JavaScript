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
       checkdraw();
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
           status='win'
           msgprint(); 
           return;
        }
    }

}
   }

   checkdraw=function(){
    isdraw=true;
     for(i=0;i<box.length;i++){
        if(box[i].innerText===''){
        isdraw=false;
        break;
        }
    
     }
     if(isdraw){
        status="draw"
        msgprint();
     }
    }
    
msgprint=()=>{
    if(status==='win')
    {
        msg.innerText='Congratulation You are a Winner'
        disable();
    }
else if(status==='draw'){
    msg.innerText='Game is Draw'
    disable();

}
}

   const disable=()=>{
    for(let i of box){
        i.disabled=true;
    }
}

rbutton=document.querySelector(".reset")

   enabled=()=>{
       for(let i of box){
           i.disabled=false;
           i.innerText=""
           }
   
   }
   
   resetbutton=()=>{
       turnX=true;
       enabled();
       msg.innerText='Tic Tac Toe Game'

   }
   
msg=document.querySelector(".print")


rbutton.addEventListener("click", resetbutton)

