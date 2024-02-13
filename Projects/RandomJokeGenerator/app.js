URL="https://official-joke-api.appspot.com/random_joke";
button =document.querySelector(".click")
jokecontainer=document.querySelector(".jokecontainer")

button.addEventListener("click", async (event)=>{
    console.log("clicked")
    

    let response= await fetch(URL)
    let api= await response.json()
    let setup=(api.setup) 
    let punchline=api.punchline 
    joke=setup+punchline
    console.log(joke)
    j=joke;
    p="😹😹";
    k=j+p;
    jokecontainer.innerText=k;
    jokecontainer.style.padding= "5%";
    
    
    


})

