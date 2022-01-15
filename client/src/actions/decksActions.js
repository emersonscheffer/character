import {} from "./types"

import axios from 'axios'

export const getDecks = () => dispatch => {
    axios.get("/api/decks").then((res) => {
        console.log(res.data)
    })
}