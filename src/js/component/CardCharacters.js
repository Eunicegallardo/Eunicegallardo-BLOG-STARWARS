import React from 'react'
import { Link } from 'react-router-dom';

const CardCharacters = ({character}) => {
    const {id, name, image, descriptionHeight, descripctionMass, descriptionEyesColor} = character;
    return (
        <div>
            <div className="card me-2" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{name} </h5>
                        <p className="card-text">{descriptionHeight}</p>
                        <p className="card-text">{descripctionMass}</p>
                        <p className="card-text">{descriptionEyesColor}</p>
                        
                        {/* boton de learnmore */}

                        <Link to={`/details/${id}`} >
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

export default CardCharacters