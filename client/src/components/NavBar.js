import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/auth.context";

export const NavBar = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    }

    return(
        <nav>
<<<<<<< HEAD
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Сокращение ссылок</a>
=======
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span href="#" className="brand-logo">Сокращение ссылок</span>
>>>>>>> add router link back
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )

}
