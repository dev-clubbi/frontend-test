import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/myContext';
import PropTypes from 'prop-types';
import './header.css';

function Header({ props }) {
  const { inputValue, setInputValue, setDataFiltered, setFilter } = useContext(myContext);
  const data = props;

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);

    const filterName = data.filter(({ name, title }) => {
      if (name)
      return name.toLowerCase().includes(value.toLowerCase())
      else return title.toLowerCase().includes(value.toLowerCase());
    });

    setDataFiltered(filterName);
    value.length <= 1 ? setFilter(false) : setFilter(true);
  };

  return (
    <header className="header">
      <div className=".flex-column-reverse">
        <div className="link-container">
          <nav>
            <Link
              to="/"
            >
            <button type="button"
              className="btn btn-outline-light">
                FILMES
            </button>
            </Link>
            <Link
              to="/people"
            >
            <button type="button"
              className="btn btn-outline-light">
                ATORES
            </button>
            </Link>
            <Link
              to="/location"
            >
            <button type="button"
              className="btn btn-outline-light">
                LOCAÇÃO
            </button>
            </Link>
          </nav>
        </div>
        <label htmlFor="inputHeader">
        {' '}
          <input
            id="inputHeader"
            placeholder="Sua Busca"
            type="text"
            value={ inputValue }
            onChange={ handleChange }
          />
        </label>
      </div>  
    </header>
  );
}

Header.propTypes = {
  props: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Header;