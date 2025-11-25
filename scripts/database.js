const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 1 },
        { id: 2, name: "Boaty McBoatface", dockId: 2 },
        { id: 3, name: "Seawise Giant", dockId: 3 }
    ],
    ships: [
        { id: 1, name: "Esso Atlantic", haulerId: 1 },
        { id: 2, name: "Prairial", haulerId: 1 },
        { id: 3, name: "Palais Royal", haulerId: 2 },
        { id: 4, name: "Rivoli", haulerId: 3 },
        { id: 5, name: "Champs Élysée", haulerId: 2 },
        { id: 6, name: "Ever Ace", haulerId: 2 },
        { id: 7, name: "Nisei Maru", haulerId: 3 },
        { id: 8, name: "MSC Gülsün", haulerId: 3 },
        { id: 9, name: "HMM Rotterdam", haulerId: 1 },
        { id: 10, name: "CMA CGM Trocadero", haulerId: 1 }
    ]
}

// export getDocks to return copy of dock list
export const getDocks = () => structuredClone(database.docks)
export const getHaulers = () => structuredClone(database.haulers)
export const getShips = () => structuredClone(database.ships)
