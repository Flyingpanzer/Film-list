import React from 'react';
import './App.css';

import SearchForm from './SearchForm';
import SearchDetails from '../containers/SearchDetails';

const SearchFilm = ({ searchFilm }) => {
  const findFilm = (searchInput, inputType) => {
    const searchData = new FormData();
    searchData.append('searchInput', searchInput);
    searchData.append('inputType', inputType);
    searchFilm(searchData);
  };

  return (
    <div className="container">
      <SearchForm findFilm={findFilm} />
      <SearchDetails />
    </div>
  );
};

export default SearchFilm;
