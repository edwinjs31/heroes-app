import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroById';

//COMPONENTE ENCARGADO DE LA DESCRIPCION DE LOS HEROES
//=====================================================

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
    <div className='row mt-3'>

      <div className="col-sm-7 col-md-4 col-lg-4 col-xl-3  animate__animated animate__fadeInLeft">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3 className="animate__animated animate__fadeInDown">{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p><b>Alter ego:</b> {alter_ego}</p>
          </li>
          <li className="list-group-item">
            <p><b>Publisher:</b> {publisher}</p>
          </li>
          <li className="list-group-item">
            <p><b>First Appearance:</b> {first_appearance}</p>
          </li>
        </ul>

        <h5 className='mt-1'>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-success mb-2 animate__animated animate__swing' onClick={hangleReturn}>Regresar</button>
      </div>

    </div>
  )
}
