import { dockList } from "./dockList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
