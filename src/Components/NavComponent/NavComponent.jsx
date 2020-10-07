import React from 'react';
import './NavComponent.scss';
import {Link} from "react-router-dom";

export default function NavComponent() {
    return (
        <div className="main-container" >
            <nav >
                <ul className="c-nav" >
                    <li className="c-nav__link" >
                        <Link className ="link" to="/Characters" >PERSONAJES</Link>
                    </li>
                    <li  className="c-nav__link" >
                        <Link className ="link" to="/Houses" >CASAS</Link>
                    </li>
                    <li className="c-nav__link" >
                        <Link className ="link" to="/Chronology" >CRONOLOGIA</Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}
