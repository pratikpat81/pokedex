function start(){
 //NAME
    const pokemonName = "Lugia"
    const pokemonNameMessage = "Pokemon Name: " + pokemonName;
    document.getElementById("name").innerHTML = pokemonNameMessage

//IMAGE
const imageURL = 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    document.getElementById("image").src = imageURL;
}

//MOVE LIST 
const move1 = "headbutt"
const move2 = "fly"
const move3 = "gust"
const move4 = "whirldwind"
document.getElementById("move-list").innerHTML =
`<li>${move1}</li> <li>${move2}</li> <li>${move3}</li> <li>${move1}</li>`

const requestURL = "https://pokeapi.co/api/v2/pokemon/lugia";
//JS Promises 

fetch (requestURL)
.then((x) => x.json())
.then((obj)) => { 
    console.log(obj);

}); 