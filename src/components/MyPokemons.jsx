import React, { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import "../styles/MyPokemons.css";

export const MyPokemons = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    
 
    const API = "https://pokeapi.co/api/v2/pokemon/?limit=500";

    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            const getAllPokemonsData = data.results.map( async (currPokemon) => {
                const res = await fetch(currPokemon.url);
                const pokemonData = await res.json();
                return pokemonData;
            })

            const allPokemonData = await Promise.all(getAllPokemonsData);
            console.log(allPokemonData);
            setPokemon(allPokemonData);
            setLoading(false);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    //* Search Functionality 
    const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()));

    if(loading) {
        return (
            <>
                <div className="container-fluid" style={{height : "100vh"}}>
                    <div className="row justify-content-center align-items-center" style={{height : "100vh", width : "100%"}}>
                        <div className="col-6 text-center">
                            <h1 style={{color: "#FF6500"}}>.........Loading..........</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // if(error) {
    //     return (
    //         <>
    //             <div className="container-fluid" style={{height : "100vh"}}>
    //                 <div className="row justify-content-center align-items-center" style={{height : "100vh", width : "100%"}}>
    //                     <div className="col-6 text-center">
    //                         <h1 style={{color: "#FF6500"}}> Error </h1>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // }
    
    return (
        <>
            <div className="container-fluid pokemons py-4">
                <h1 className='text-center myFont'>Let's Catch Pokemon</h1>
                <div className="row justify-content-center py-4 font-3">
                    <div className="col-lg-4 col-md-8 px-4">
                        <input 
                            type="text" 
                            className='w-100 text-center'
                            placeholder='Search Pokemon' 
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            onFocus={() => {placeholder=""}}
                        />
                    </div>
                </div>
                <div className="row justify-content-evenly pikachu py-4">
                    {
                        searchData.map((currPokemon) => {
                            return <PokemonCard key={currPokemon.id} currPokemonData={currPokemon} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
