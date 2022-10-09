import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
        <div>
          <Link
            to="/"
          >
            FILMES
          </Link>
          <Link
            to="/people"
          >
            ATORES
          </Link>
          <Link
            to="/location"
          >
            LOCAÇÃO
          </Link>
        </div>
    </header>
  );
}

export default Header;