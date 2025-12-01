import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // if clicked type is dock then get dock id and filter list of haulers
        if (itemClicked.dataset.type = "dock") {

            const clickedDockId = parseInt(itemClicked.dataset.id)
            const clickedDockLocation = itemClicked.dataset.location
            const allHaulers = getHaulers()
            const dockedHaulers = allHaulers.filter((hauler) => hauler.dockId === clickedDockId)
            
            // check if dockedHaulers array has length and display message
            let haulerString = ""
            if (dockedHaulers.length === 0) {
                haulerString = "nothing"
            } else {
                haulerString = dockedHaulers.map(hauler => hauler.name).join(", ")
            }

            window.alert(`The ${clickedDockLocation} dock is currently unloading ${haulerString}`)
        }
    }
)

export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
            <li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">
                ${dock.location} can hold ${dock.volume} million tons of cargo
            </li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}
