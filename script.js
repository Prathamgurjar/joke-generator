const jokeContainer=document.getElementById("Joke")
const btn=document.getElementById("btn");
//const url="https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088"
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist,explicit&type=single";
let getJoke=()=>{
    jokeContainer.classList.remove("fade")
   fetch(url)
   .then(data=>data.json())
   .then(item=>
{
    jokeContainer.textContent=item.joke;
    jokeContainer.classList.add("fade");
})
.catch(error => {
    console.error('Error fetching joke:', error);
    jokeContainer.textContent = "Failed to fetch joke. Please try again later.";
    jokeContainer.classList.add("fade");
});
}
btn.addEventListener("click",getJoke) 
getJoke()




// const jokeContainer = document.getElementById("Joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist,explicit&type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             jokeContainer.textContent = data.joke;
//             jokeContainer.classList.add("fade");
//         })
//         .catch(error => {
//             console.error('Error fetching joke:', error);
//             jokeContainer.textContent = "Failed to fetch joke. Please try again later.";
//             jokeContainer.classList.add("fade");
//         });
// };

// btn.addEventListener("click", getJoke);
// getJoke();
 

// const jokeContainer = document.getElementById("Joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist,explicit&type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             jokeContainer.textContent = data.joke;
//             jokeContainer.classList.add("fade");
//         })
//         .catch(error => {
//             console.error('Error fetching joke:', error);
//             jokeContainer.textContent = "Failed to fetch joke. Please try again later.";
//             jokeContainer.classList.add("fade");
//         });
// };

// btn.addEventListener("click", getJoke);
// getJoke();
