let button=document.querySelector("#bttn")
let state=document.querySelector("#state")

let flag=0;



button.addEventListener("click",(event)=>{
    if(flag==0){
    button.style.backgroundColor="green";
    button.innerHTML="Unfriend";
    state.innerHTML="Friends";
    flag=1;
}else{
    button.style.backgroundColor="rgb(98, 98, 238)";
    button.innerHTML="Add Friend";
    state.innerHTML="Unknown";
    flag=0;
}
    

})