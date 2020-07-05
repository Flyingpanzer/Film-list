import React, { useState } from 'react';

import './App.css';
import FilmForm from './FilmForm';

const AddFilm = ({
  addNewFilm,
  showAddModal,
  hideAddModal,
  isShowingAddModal,
  errorAdd,
  success,
  successAddMsg,
}) => {
  const [inputFields, setInputFields] = useState({
    filmTitle: {
      value: '',
      error: '',
    },
    filmYear: {
      value: '',
      error: '',
    },
    filmFormat: {
      value: '',
      error: '',
    },
    filmStars: {
      value: '',
      error: '',
    },
  });

  const validateInput = () => {
    const { filmTitle, filmYear, filmFormat, filmStars } = inputFields;

    const errors = {};

    if (filmTitle.value === '' || filmYear.value.trim() === '') {
      errors.filmTitle = 'Please, enter a movie title';
    }

    if (filmYear.value === '' || filmYear.value.trim() === '') {
      errors.filmYear = 'Please, enter a movie release date';
    } else if (isNaN(filmYear.value)) {
      errors.filmYear = 'Movie release date must be a number';
    } else if (filmYear.value < 1850 || filmYear.value > 2025) {
      errors.filmYear =
        'Movie release date must be in range between 1850 and 2025';
    }

    if (filmFormat.value === '' || filmFormat.value.trim() === '') {
      errors.filmFormat = 'Please, enter the film format';
    }

    if (filmStars.value === '') {
      errors.filmStars = 'Please, enter the film stars';
    } else if (/\d/g.test(filmStars.value)) {
      errors.filmStars = 'Film start input must not contain a number';
    }

    if (Object.keys(errors).length > 0) {
      const newInputs = Object.assign({}, inputFields);

      for (let inputField in errors) {
        newInputs[inputField].error = errors[inputField];
      }

      setInputFields(newInputs);

      return false;
    }
    return true;
  };

  const resetInputFields = () => {
    setInputFields({
      ...inputFields,
      filmTitle: {
        value: '',
        error: '',
      },
      filmYear: {
        value: '',
        error: '',
      },
      filmFormat: {
        value: '',
        error: '',
      },
      filmStars: {
        value: '',
        error: '',
      },
    });
  };

  const addFilm = (e, inputFields) => {
    e.preventDefault();

    const isInputValid = validateInput(inputFields);

    if (isInputValid) {
      const { filmTitle, filmYear, filmFormat, filmStars } = inputFields;
      const data = new FormData();
      data.append('filmTitle', filmTitle.value.trim());
      data.append('filmYear', filmYear.value.trim());
      data.append('filmFormat', filmFormat.value.trim());
      data.append('filmStars', filmStars.value.trim());

      addNewFilm(data);
      showAddModal();
      resetInputFields();
      console.log(successAddMsg);
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
        showAddModal={showAddModal}
        hideAddModal={hideAddModal}
        isShowingAddModal={isShowingAddModal}
        success={success}
        errorAdd={errorAdd}
        successAddMsg={successAddMsg}
      />
    </div>
  );
};

export default AddFilm;
