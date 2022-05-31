import React from 'react';
import {Link} from 'react-router-dom';

const NavEnd = () => {
  return (
    <nav className="nav__end">
        <div className="nav__end__link">
            <Link to="/projets">Projets</Link>
        </div>

        <div className="nav__end__link">
            <Link to="/a-propos">A-propos</Link>
        </div>
    </nav>
  )
}

export default NavEnd