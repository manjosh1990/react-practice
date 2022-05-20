import React, { useEffect, useState } from "react";

export default function UseEffectComponent() {
    const URL = "https://swapi.dev/api/people/"
    const [starWarsData, setStarWarsData] = useState({})
    const [count,setCount] = useState(1);


    console.log("Component rendered")
    //side effects
       useEffect(() =>{
        console.log("effect ran")
        fetch(URL+count)
        .then(res =>res.json())
        .then(data =>setStarWarsData(data))
    },[count])
    return (
        <div>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
            <h2>The Count is : {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount +1)}>Get Next Character</button>
        </div>
    )
}