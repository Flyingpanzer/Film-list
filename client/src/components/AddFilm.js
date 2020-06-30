import React, { useState } from 'react';

import './App.css';
import FilmForm from './FilmForm';

const AddFilm = ({ addNewFilm }) => {
  const [inputFields, setInputFields] = useState({
    filmTitle: '',
    filmYear: '',
    filmFormat: '',
    filmStars: '',
  });

  const resetInputFields = () => {
    setInputFields({
      filmTitle: '',
      filmYear: '',
      filmFormat: '',
      filmStars: '',
    });
  };

  const addFilm = (e, inputFields) => {
    e.preventDefault();

    const { filmTitle, filmYear, filmFormat, filmStars } = inputFields;
    if (
      filmTitle.trim() !== '' &&
      filmYear.trim() !== '' &&
      filmFormat.trim() !== '' &&
      filmStars.trim() !== ''
    ) {
      const data = new FormData();
      data.append('filmTitle', filmTitle);
      data.append('filmYear', filmYear);
      data.append('filmFormat', filmFormat);
      data.append('filmStars', filmStars);
      addNewFilm(data);
      resetInputFields();
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <FilmForm
        addFilm={addFilm}
        inputFields={inputFields}
        setInputFields={setInputFields}
      />
    </div>
  );
};

export default AddFilm;
