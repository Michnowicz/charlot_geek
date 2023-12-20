
function walk(player) {
    let choice = prompt("dzien dobry... Please chose a place to visit: (house/subway/office)").toLowerCase()

    switch (choice) {
        case player.actualPlace:
            alert("You're already at this place")
            walk(player)
            break;
        case "house":
            player.actualPlace = choice
            alert("You're going to the" + choice)
            break;
        case "subway":
            player.actualPlace = choice
            alert("You're going to the" + choice)
            break;
        case "office":
            player.actualPlace = choice
            alert("You're going to the" + choice)
            break;
        default:
            alert("wrong command, please try again")
            walk(player)
            break;
    }
    return choice
}


export { walk }

