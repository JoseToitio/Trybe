// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json'}
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const joke = document.querySelector('h2');
    joke.innerText = data.joke;
  })
};




window.onload = () => fetchJoke();