import React from 'react';

export default function City({city}){

    return(
        <div>
            <h2>{city.name}</h2>
            <div>
                <div>Temperatura: {city.temp} ºC</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind} km/h</div>
                <div>Nubosidad: {city.clouds}</div>
            </div>
        </div>
    )
}
