user_score=0
comp_score=0
ch=document.querySelectorAll(".choice")
msg=document.querySelector(".msg")
user=document.querySelector(".user")
ctitle=document.querySelector(".ctitle")
uscor=document.querySelector(".uscor")
cscor=document.querySelector(".cscor")



ch.forEach(element => {
    
    element.addEventListener("click",(e)=>{
        user_choice=element.getAttribute("id")
        //console.log( "user choice",att)
        game_choice(user_choice)
       })
});

comp_choice=()=>{
    choice=["stone","paper","scissor"]
    choose_random=Math.floor(Math.random()*3)
    comp_ans=choice[choose_random]
    //console.log( "comp choice",comp_ans)
}


game_choice=(user_choice)=>{
user.innerText= `User choice is ${user_choice}`
console.log("User choice is ",user_choice)
comp=comp_choice();
ctitle.innerText= `Computer choice is ${comp_ans}`
console.log("Computer choice is ",comp_ans)


if(user_choice===comp_ans)
      {
        msg.innerText= `Game is Drawn `
        console.log("Game is Drawn")
        
      }

else 
    {
        winner()
    }

}

showwinner=(user_win)=>{
    if(user_win){
        msg.innerText= ` You Win`
        console.log("You win")
        user_score+=1
        uscor.innerText=`${user_score}`
    }
    else
    {
         msg.innerText= `Computer Wins `
         console.log("Computer Win")
         comp_score+=1
        cscor.innerText=`${comp_score}`
    }
    
}
winner=()=>{
    user_win=true

    if(user_choice==="stone"){
        //paper scissor
       user_win= comp_ans==="paper"? false : true
    }
    else if(user_choice==="paper"){
        //rock,sccissor
         user_win=comp_ans==="stone"? true:false
        }
    else if(user_choice==="scissor"){
        //paper rock
        user_win=comp_ans==="paper"?true:false
    }

    showwinner(user_win)
}


