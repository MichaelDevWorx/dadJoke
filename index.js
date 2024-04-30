const jokeBtn= document.querySelector(".btn");
const jokeDisplay = document.querySelector(".jokeDisplay")

jokeBtn.addEventListener("click", async event => {
    
    event.preventDefault();
    
    const jokeData = await fetch("https://icanhazdadjoke.com", { 
        headers: {
            Accept: "application/json"
        }
    });

    const joke = await jokeData.json();

    if (joke.status === 200) {
        displayJoke(joke.joke);
        return joke.joke;
    } else {
        return "Error retrieving dadjoke";
    }
 
});

function displayJoke(joke) {

    const jokeContent = document.createElement("p")
    jokeDisplay.textContent = "";
    jokeContent.textContent = joke;
    jokeDisplay.appendChild(jokeContent);


}

