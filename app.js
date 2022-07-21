function start(){

//MOVE LIST 
let move1 = "Headbutt"
let move2 = "Fly"
let move3 = "Gust"
let move4 = "Whirlwind"
document.getElementById(
    "move-list"
    ).innerHTML =`<li>${move1}</li><li>${move2}</li><li>${move3}</li><li>${move4}</li>`

const requestURL = "https://pokeapi.co/api/v2/pokemon/charmander"
//JAVASCRIPT PROMISES 
fetch(requestURL)
.then((x) => x.json())
.then((obj) => { 
const name = obj.name;
const pokemonNameMessage = "Pokemon Name: " + name;
document.getElementById("name").innerHTML = pokemonNameMessage

//IMAGE
const imageURL = obj.sprites.front_default;
document.getElementById("image").src = imageURL;

//MOVE LIST 
let move1 = obj.moves[0].move.name;
let move2 = obj.moves[1].move.name;
let move3 = obj.moves[2].move.name;
let move4 = obj.moves[4].move.name;
document.getElementById(
    "move-list"
    ).innerHTML =`<li>${move1}</li><li>${move2}</li><li>${move3}</li><li>${move4}</li>`


});

} 