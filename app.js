const btn = document.querySelector("button");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    fetch(`https://hindi-jokes-api.onrender.com/jokes?api_key=05895e8982d4bfd10e20b4c6346b`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.jokeContent);
        result.innerHTML = data.jokeContent;
    });
})