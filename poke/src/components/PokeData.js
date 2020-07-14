import React, { useState, useEffect } from "react"

import axios from "axios"

import { cardExampleCard } from "./Cards"

const PokeData = () => {
    const [data, setData] = useState([]);
    console.log("data", data)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=1`).then(res => {
            setData(res.data.results);
            console.log("get response data", res.data)
            console.log("characters object", setData)
        });
    }, [])
    //[] above to only load once

    return (
        <div className="App">
            {data && data.map(char => <cardExampleCard char={char} />)}
        </div>
    )
}

export default PokeData