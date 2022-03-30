import React from 'react'
import { Link } from 'react-router-dom';

//COMPONENTE CARD DE CADA IMAGEN IMAGEN
//======================================================

//desestructuramos el heroe directamente(props)
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/img/${id}.jpg`;
    
    return (
        <div className="row g-2 mx-1">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 animate__animated animate__rotateInUpLeft">
                        <img src={imagePath} alt={superhero} className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="car-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
