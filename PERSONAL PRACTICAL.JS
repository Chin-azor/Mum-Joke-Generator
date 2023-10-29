const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apikey = "HwInS+8My62E8wFzhwNhrQ==VLn3KgfysGJVuYUL";

const options = {
    method: "GET",
    Headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
    
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;

}   catch (error) {
    jokeEl.innerText = "an error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
}
}

btnEl.addEventListener("click", getJoke);