import React, { useState, useEffect } from 'react'
import CardCharacters from '../component/CardCharacters';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const apiStarwars = 'https://www.swapi.tech/api/people';

    useEffect(() => {
        fetch(apiStarwars)
            .then(response => response.json())
            .then(data => {
                const charactersInfo = data.results.map(result => result.url);

                Promise.all(
                    charactersInfo.map(url =>
                        fetch(url).then(response => response.json()))
                )
                    .then(dataCharacters => {
                        const charactersproperties = dataCharacters.map(data => ({
                            id: data.result.uid,
                            name: data.result.properties.name,
                            image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
                            descriptionHeight: `Height: ${data.result.properties.height} cm`,
                            descripctionMass: `Mass: ${data.result.properties.mass} kg`,
                            descriptionEyesColor: `Eyes color: ${data.result.properties.eye_color}`

                        }));
                        setCharacters(charactersproperties);
                    })
                    .catch(err => err)
            })
            .catch(err => err)
    }, []);

    return (
        <div className='container-card mb-5'>
            {
                characters.map((character) => (
                    <CardCharacters key={character.id} character={character} />
                ))
            }

        </div>
    );
};

export default Characters