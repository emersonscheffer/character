import {} from "./types"

import axios from 'axios'

export const getDecks = () => dispatch => {
    axios.get("/api/decks").then((res) => {
        dispatch({ type: "LOAD_DECKS", payload: res.data})
        console.log(res.data)
    })
}