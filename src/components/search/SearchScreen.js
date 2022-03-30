import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

    //manejo de parámetros url
    const navigate = useNavigate();
    //contiene toda la informacion de la página actual, pathName,search,etc.
    const location = useLocation();
    //contiene un ubjeto con todos los atributos de la página actual,si no tien query se establece como bacio
    const { q = '' } = queryString.parse(location.search);

    //el initialState será q=nombre del heroe
    const [formValue, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValue;

    const heroesFilter = getHeroesByName(q);
    // console.log(location);
    const handleSubmitSeach = (e) => {
        e.preventDefault();
        //le mandamos como query param
        navigate(`?q=${searchText}`);
    }


    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSubmitSeach}>
                        <input type="text"
                            name='searchText'
                            placeholder='Buscar un héroe'
                            className='form-control'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}

                        />
                        <button type='submit' className='btn btn-dark mt-3'>Buscar...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q==='') 
                        ? <div className='alert alert-info'>Buscar un heroe</div>
                        : (heroesFilter.length === 0) && <div className='alert alert-danger'>No hay resultados: {q}</div>
                    }

                    {
                        //usamos el componente 'HeroCard' le enviamos desestructurando los atributos de hero
                        heroesFilter.map(hero => (<HeroCard key={hero.id} {...hero} />))
                    }
                </div>
            </div>
        </>
    )
}
