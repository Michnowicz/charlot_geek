
// a => choice: choix de l'utilisateur (walk/search)
// b => place: tableau contenant les lieux
// c => player
function search(a, b, c) {
    if (a == "search") {
        switch (c.actualPlace) {
            case "house":
                // vérifie si il n'y a pas d'objet dans le lieu 
                if (b[0].inventory == "") {
                    // si oui, on renvoie une alert
                    alert("Nothing found here")
                } else {
                    // sinon, on copie l'objet dans l'inventaire du joueur et on enlève l'objet du lieu
                    c.inventory.push(b[0].inventory)
                    b[0].inventory = ""
                    alert("You found: " + b[0].inventory)
                }
                break;
            case "subway":
                if (b[1].inventory == "") {
                    alert("Nothing found here")
                } else {
                    c.inventory.push(b[1].inventory)
                    b[1].inventory = ""
                    alert("You found: " + b[1].inventory)
                }
                break;
            case "office":
                if (b[2].inventory == "") {
                    alert("Nothing found here")
                } else {
                    c.inventory.push(b[2].inventory)
                    b[2].inventory = ""
                    alert("You found: " + b[2].inventory)
                }
                break;
            default:
                break;
        }
    }

}

export { search }
