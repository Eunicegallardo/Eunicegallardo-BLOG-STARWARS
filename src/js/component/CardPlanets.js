import React from 'react'
import { Link } from 'react-router-dom';

const CardPlanets = ({planets}) => {
    console.log(planets);
    const {idPlanets, namePlanets, imagePlanets, descriptionPopulation, descripctionTerrain } = planets;
    return (
        <div>
            <div className="card me-2" style={{ width: "18rem" }}>
                <img src={imagePlanets} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{namePlanets} </h5>
                    <p className="card-text">{descriptionPopulation}</p>
                    <p className="card-text">{descripctionTerrain}</p>

                    {/* boton de learnmore */}

                    <Link to={`/details/${idPlanets}`} >
                        <button type='button' className='btn btn-warning me-3'>
                            Learn more
                        </button>
                    </Link>

                    <button type='button' className='btn btn-danger'>
                        ♡
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanets