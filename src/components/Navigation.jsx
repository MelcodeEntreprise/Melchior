import React from 'react';
import {Link} from 'react-router-dom';
import homeSvg from '../assets/svg/home.svg';

const Navigation = () => {
  return (
    <nav className="navigation container"> 
        <div className="nav__logo">
            <h1>FM</h1>
        </div>

        <div className="nav__accueil">
            <Link to="/" className="nav__home">
                <img src={homeSvg} alt="home__icon" />
            </Link>
        </div>

        <div className="nav__contact">
            <Link to="/contact">
                Contact
            </Link>
        </div>
    </nav> 
  )
}

export default Navigation