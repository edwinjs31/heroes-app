import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const NavBar = () => {
    //para acceder a la informacion del slabon superior. Devulve un estado y una accion(user,dispatch)
    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    //mandamos la accion de logout y redireccionamos.
    const hadleLogout = () => {
        dispatch({ type: types.logout });
        navigate('/login', { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-4" to="/">
                    Asociaciones
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#minavBar" aria-controls="minavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="minavBar">
                    <div className="navbar-nav">

                        <NavLink className="nav-item nav-link" to="/marvel">
                            Marvel
                        </NavLink>

                        <NavLink className="nav-item nav-link" to="/dc">
                            DC
                        </NavLink>

                        <NavLink className="nav-item nav-link" to="/search">
                            Search
                        </NavLink>
                    </div>


                    <div className="w-100 d-flex justify-content-end me-4">
                        <ul className="navbar-nav ">
                            <span className="nav-item nav-link text-info">{user.name}</span>
                            <button onClick={hadleLogout} className="nav-item nav-link btn btn-outline-info">
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}
