import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    //
    const navigate = useNavigate();
    const hadleLogout = () => navigate('/login', { replace: true });

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand ms-4" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav ms-4">

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
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end me-4">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> Edwin</span>
                    <button onClick={hadleLogout} className="nav-item nav-link btn btn-outline-info">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
