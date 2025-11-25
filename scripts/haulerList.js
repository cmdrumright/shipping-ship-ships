import { getHaulers } from "./database.js"


export const haulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `
            <li>
                ${hauler.name}
            </li>
        `
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
