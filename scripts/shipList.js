import { getShips } from "./database.js"

export const shipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each ship object to an <li> and append to the shipsHTML string
        shipsHTML += `
            <li>
                ${ship.name}
            </li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
