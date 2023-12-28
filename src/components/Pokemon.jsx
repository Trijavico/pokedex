/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function Pokemon({ URL }){

    const [pokeInfo, setInfo] = useState();

    async function fetchData(){
        const response = await fetch(URL);
        const data = await response.json();
        setInfo(data)
        console.log(pokeInfo)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="pokemon">
            <img src={`${pokeInfo?.sprites.front_default}`} alt="Pokemon" />
            <p className="number">N°{pokeInfo?.order}</p>
            <p className="name">{pokeInfo?.name}</p>
            <div className="row">
                {
                    pokeInfo?.types.map( (obj) => {
                        return (<span key={obj.type.name} data-poketype={obj.type.name} >{obj.type.name}</span>)
                    })
                }
            </div>
        </div>
    );
}


export default Pokemon;