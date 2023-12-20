import { walk } from "./walk.js";
import { search } from "./search.js";

// création du personnage
let player = {
    name:"",
    surname:"",
    actualPlace:"",
    inventory: []
}



// création d'un tableau qui comprends la liste des lieux
let place = [
    {
        id: "house",
        inventory: "key"
    },
    {
        id: "subway",
        inventory: "used needle"
    },
    {
        id: "office",
        inventory: "binder"
    }
]


// variable qui est utilisée pour la difficulté
let difficuly = ""



// l'utilisateur choisis un nom et un prénom
player.name = prompt("What's your name?")
player.surname = prompt("What's your surname?")



// début du jeu

walk(player)

let choice =  prompt("You're at the " + player.actualPlace + ".\n\n search \n walk.")






