import { useEffect, useState } from "react";
import { API_URL } from "../PokeService";
import Pokemon from "./Pokemon";
import SearchBar from './SearchBar'

function Pokemons(){

    const [pokes, setPokes] = useState([]);
    const [pokesByInput, setPokesByInput] = useState([]);

    useEffect(()=>{
        fetch(`${API_URL}pokemon?limit=20`)
        .then(response => response.json())
        .then(data => {
            setPokes(data.results);
            setPokesByInput(data.results);
        })
        .catch(error => console.log(error))
    }, [])

    function handelFunc(e){
        e.preventDefault();

        let userInput = e.target.pokename.value.toLowerCase();
        const pokes_filtr = pokes.filter(pokemon => pokemon.name.includes(userInput));
        setPokesByInput(pokes_filtr)
    }

    return(
        <>
        <SearchBar handleSubmit={handelFunc} />
        <div className="pokemons">
            {pokesByInput.map(pokemon => (<Pokemon key={pokemon.name} URL={pokemon.url} />))}
        </div></>
    );
}

export default Pokemons;