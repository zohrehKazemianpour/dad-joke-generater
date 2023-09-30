const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke-container");


const apiKey  = "iV/8AUCRTKcxujG2cZYcMA==OnBl219JuQvttCSu";

const options = {
    meethod: "GET",
    headers: { "X-Api-Key": apiKey},
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke () {

    try {
        jokeEl.innerText = "updating..."
 btnEl.disabled = true;
 btnEl.innerText = "Loading..."
const response = await fetch(apiURL, options)
const data = await response.json();

jokeEl.innerText = data[0].joke;

btnEl.disabled = false;
btnEl.innerText= "Tell me a joke"
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later!"
        btnEl.disabled = false;
btnEl.innerText= "Tell me a joke"
    
    }

 

 

}




btnEl.addEventListener("click", getJoke);