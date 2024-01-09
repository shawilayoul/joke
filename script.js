
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");



const apiKey = "CB/JQDFSXbiUbm1K5OUH0A==qDHetPNPPoJxopoD";
const URL = "https://api.api-ninjas.com/v1/jokes?limit=1";
const option = {
    method: "GET",
    headers: { 'X-Api-Key': apiKey },
    contentType: 'application/json',

}

async function getJoke() {
    try {
        joke.innerText = "updating....";
        btn.innerText = "loading"
        const res = await fetch(URL, option)
        const data = await res.json();
        joke.innerText = data[0].joke;
        btn.innerText = "Tell a joke";
    } catch (error) {
        console.log(error);

    }
}

btn.addEventListener('click', getJoke)