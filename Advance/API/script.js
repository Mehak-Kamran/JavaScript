URL= "https://cat-fact.herokuapp.com/facts"
getfact=document.querySelector(".printfact")
let button=document.querySelector(".btn")


async function facts (){

    let response=await fetch(URL) 
    let data = await response.json()
    console.log(data[3].text)
   getfact.innerText=(data[3].text)
}

button.addEventListener("click",facts)
