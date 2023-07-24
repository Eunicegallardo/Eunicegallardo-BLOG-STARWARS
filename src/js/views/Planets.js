import React, { useState, useEffect } from 'react'
import CardPlanets from '../component/CardPlanets';

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const apiStarwarsPlanets = 'https://www.swapi.tech/api/planets/';

    useEffect(() => {
        fetch(apiStarwarsPlanets)
            .then(response => response.json())
            .then(data => {
                const planetsInfo = data.results.map(result => result.url);

                Promise.all(
                    planetsInfo.map(url =>
                        fetch(url).then(response => response.json()))
                )
                    .then(dataPlanets => {
                        const Planetsproperties = dataPlanets.map(data => ({
                            idPlanets: data.result.uid,
                            namePlanets: data.result.properties.name,
                            imagePlanets: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
                            descriptionPopulation: `Population: ${data.result.properties.population}`,
                            descripctionTerrain: `Terrain: ${data.result.properties.terrain}`,

                        }));
                        setPlanets(Planetsproperties);
                    })
                    .catch(err => err)
            })
            .catch(err => err)
    }, []);

    return (
        <div className='container-card mb-5'>
            {
                planets.map((planets) => (
                    <CardPlanets key={planets.idPlanets} character={planets} />
                ))
            }

        </div>
    )
}

export default Planets