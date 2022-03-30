import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroById';

export const HeroScreen = () => {
  const navegate = useNavigate();

  //Éste hook nos sirve para manejar argumentos por url
  //desestructurando accedemos al id del heroe(heroeId está definida en DashBoardRouter )
  const { heroeId } = useParams();

  //llamamos al helper que tenemos para buscar el heroe por id,'memo' memorizará el rehore, cuando cambie el su id volverá a memorizar
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  //si el heroe no existe redirige a home
  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = hero;

  const imagePath = `/assets/img/${id}.jpg`;

  const hangleReturn = () => navegate(-1);

  return (
    <div className='row mt-5'>

      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">

        <h3>{superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p>Alter ego: <b>{alter_ego}</b></p>
          </li>
          <li className="list-group-item">
            <p>Publisher: <b>{publisher}</b></p>
          </li>
          <li className="list-group-item">
            <p>First Appearance: <b>{first_appearance}</b></p>
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-dark' onClick={hangleReturn}>Regresar</button>
      </div>

    </div>
  )
}
