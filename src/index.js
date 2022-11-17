// Your code here
console.log("Houston has landed")

const BoxImage = document.getElementById("image")
const BoxName = document.getElementById("name")
const BoxVotes = document.getElementById("votes")
const data = document.getElementById("characters")
const featuredCharacter = document.getElementById("character-bar")

BoxVotes.addEventListener('click', () => {
    if (tickets > 0) {
        votes = votes + 5
        BoxVotes.textContent = votes
    }
})

const request = async() =>{
    let req = await fetch("http://localhost:3000/characters")
    let res = await req.json()
    res.forEach((character, i) => {
        BoxName.textContent = data.name;
        BoxImage.src = data.image;
        BoxVotes.textContent = data.votes;
        featuredCharacter = data;
        return featuredCharacter;
    })
request.append()
}
request()

const loadFirstChild(data) =>{
    BoxName.textContent = data.name;
    BoxImage.src = data.image;
    BoxVotes.textContent = data.votes;
    featuredCharacter = data;
    return featuredCharacter;
}

const displayClickedChar(data) => {
    BoxName.textContent = data.name;
    BoxImage.src = data.image;
    BoxVotes.textContent = data.votes;
    featuredCharacter = data;
    return featuredCharacter;
}



