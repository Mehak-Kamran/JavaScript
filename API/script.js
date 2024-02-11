URL= "https://cat-fact.herokuapp.com/facts"

async function facts (){

    let response=await fetch(URL) 
    let data = await response.json()
    console.log(data[3].text)
}
