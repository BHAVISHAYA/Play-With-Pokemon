import React from 'react';
import "../styles/MyPokemons.css";
import { Pokemon_Info } from './Pokemon_Info';

export const PokemonCard = ({currPokemonData}) => {

    return (
        <>
            <div className="col-10 col-md-3 pokemonCard" key={currPokemonData.id}>
                <div className="row justify-content-center">
                    {/* //* Pokemon Image */}
                    <div className="col-12 text-center imageDiv">
                        <div className='fancyBorder'></div>
                        <img className='img-fluid' src={currPokemonData.sprites.other.dream_world.front_default} alt={currPokemonData.name} />
                    </div>

                    {/* //* Pokemon Name and Type */}
                    <div className="col-12 text-center mt-2 pokemonName">
                        <h3> {currPokemonData.name} </h3>
                        <p className='mx-auto'> 
                            {
                                currPokemonData.types.map((currType) => currType.type.name).join(", ")
                            } 
                        </p>
                    </div>

                    {/* //* Pokemon Info */}
                    <div className="row text-center pokemonInfo myFont">
                        <Pokemon_Info infoType="Height" infoData={currPokemonData.height} />
                        <Pokemon_Info infoType="Weight" infoData={currPokemonData.weight} />
                        <Pokemon_Info infoType="Speed" infoData={currPokemonData.stats[5].base_stat} />
                        <Pokemon_Info infoType="Experience" infoData={currPokemonData.base_experience} />
                        <Pokemon_Info infoType="Attack" infoData={currPokemonData.stats[1].base_stat} />
                        <Pokemon_Info infoType="Abilities" infoData={currPokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")} />
                    </div>
                </div>
            </div>
        </>
    )
}
