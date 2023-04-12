const init = () => {
 const baseUrl = "http://localhost:3000/characters";
 fetch(baseUrl)
 .then(res => res.json())
 .then(data => {
    getCharacters(data)
 })
 function getCharacters(character) {
    const div = document.getElementById('character-bar');
    character.forEach(characters => {
        const span = document.createElement('span');
        span.innerText = characters.name;
        div.appendChild(span)
        span.dataset.id = characters.id;    // dataset.id is used to assign id to our created span
        span.addEventListener('click', spanClick);
    })

 }
 function spanClick(event){
    fetchDetails(event.target.dataset.id)
}

function fetchDetails(id){
    fetch("http://localhost:3000/characters"+ `/${id}`)
    .then(res => res.json())
    .then(details => {
        display(details)
    })
}
function display(details){
    const detailName = document.getElementById('name');
    detailName.innerText = details.name;
    const image = document.getElementById("image")
    image.src = details.image
    const votes = document.getElementById("vote-count")
    votes.innerText = details.votes
}
const inputVote = document.getElementById('votes')
const form = document.getElementById("votes-form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const voteCount = document.getElementById('vote-count')
    voteCount.innerText = Number(inputVote.value) + Number(voteCount.innerText)
    form.reset()
})
const btn = document.querySelector("#reset-btn")
btn.addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('vote-count').innerText = 0;
})
}

document.addEventListener("DOMContentLoaded", init);