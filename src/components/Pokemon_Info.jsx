import React from 'react';
import "../styles/MyPokemons.css";

export const Pokemon_Info = ({infoType, infoData}) => {
    return (
        <>
            <div className="col-md-4 col-6">
                <p>
                    {infoType} : <span>{infoData}</span>
                </p>
            </div>
        </>
    )
}
