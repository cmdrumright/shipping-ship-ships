import { getShips, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {
            // Get the haulerId value of the shipping ship clicked
            const clickedHaulerId = parseInt(itemClicked.dataset.haulerid)
            const clickedShipName = itemClicked.dataset.shipname

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            const allHaulers = getHaulers()
            haulingShip = allHaulers.find((hauler) => hauler.id === clickedHaulerId)

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${clickedShipName} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const shipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        // Convert each ship object to an <li> and append to the shipsHTML string
        shipsHTML += `
            <li data-type="ship" data-haulerId="${ship.haulerId}" data-shipName="${ship.name}">
                ${ship.name}
            </li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
