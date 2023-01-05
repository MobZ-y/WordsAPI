const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f1093d68cmsh6769826233f6f74p11d2fajsn99b296e935f2",
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};
const results = document.querySelector(".diplayContainer");
const input = document.getElementById("input");
const form = document.querySelector("form");
const btn = document.querySelector("button");

let data = [];
let search = "hope";

async function Fetch() {
  await fetch("https://wordsapiv1.p.rapidapi.com/words/" + search, options)
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.error(err));

  console.log(data);
  Display();
}

function Display() {
  results.innerHTML = data = `
    <div class="card"> 
    <h2>${data.word}</h2>
    <ul>${data.results[0].definition}</ul>
    </div>
    `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Fetch();
});

input.addEventListener("input", (e) => {
  search = e.target.value;
});

window.addEventListener("load", Fetch());
