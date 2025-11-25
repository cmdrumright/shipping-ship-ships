import { getHaulers, getShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = parseInt(itemClicked.dataset.id)
            const allShips = getShips()
            let shipCount = allShips.filter((ship) => ship.haulerId === haulerId).length
            window.alert(`The hauler is carring ${shipCount} shipping ships`)
        }
    }
)

export const haulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `
            <li data-type="hauler" data-id="${hauler.id}">
                ${hauler.name}
            </li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
