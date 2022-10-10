import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/myContext';
import PropTypes from 'prop-types';

function Header({ props }) {
  const { inputValue, setInputValue, setDataFiltered, setFilter } = useContext(myContext);
  const data = props;

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);

    const filterName = data.filter(({ name, title }) => {
      if (name)
      return name.toLowerCase().startsWith(value.toLowerCase())
      else return title.toLowerCase().startsWith(value.toLowerCase());
    });

    setDataFiltered(filterName);
    value.length <= 1 ? setFilter(false) : setFilter(true);
  };

  return (
    <header>
      <div>
        <nav>
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
        </nav>
        <label htmlFor="inputHeader">
        SEARCH
        {' '}
          <input
            id="inputHeader"
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