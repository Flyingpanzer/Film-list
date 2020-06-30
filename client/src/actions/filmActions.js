const apiUrl = "/api/";

export const fetchFilms = () => {
  return dispatch => {
    dispatch(fetchFilmsRequest());
    return fetch(apiUrl).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log(data);
          dispatch(fetchFilmsSuccess(data.films, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchFilmsFailed(error));
        });
      }
    });
  };
};

export const fetchFilmsRequest = () => {
  return {
    type: "FETCH_FILMS_REQUEST"
  };
};

export const fetchFilmsSuccess = (films, message) => {
  return {
    type: "FETCH_FILMS_SUCCESS",
    films: films,
    message
  };
};

export const fetchFilmsFailed = error => {
  return {
    type: "FETCH_FILMS_FAILED",
    error
  };
};

export const addNewFilm = film => {
  return dispatch => {
    dispatch(addNewFilmRequest(film));
    return fetch(apiUrl, {
      method: "post",
      body: film
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(addNewFilmRequestSuccess(data.film, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addNewFilmRequestFailed(error));
        });
      }
    });
  };
};

export const addNewFilmRequest = film => {
  return {
    type: "ADD_NEW_FILM_REQUEST",
    film
  };
};

export const addNewFilmRequestSuccess = (film, message) => {
  return {
    type: "ADD_NEW_FILM_REQUEST_SUCCESS",
    film,
    message
  };
};

export const addNewFilmRequestFailed = error => {
  return {
    type: "ADD_NEW_FILM_REQUEST_FAILED",
    error
  };
};

export const displayFilmById = filmId => {
  return {
    type: "DISPLAY_FILM_BY_ID",
    filmId
  };
};

export const showDeleteModal = filmToDelete => {
  return {
    type: "SHOW_DELETE_MODAL",
    film: filmToDelete
  };
};

export const hideDeleteModal = () => {
  return {
    type: "HIDE_DELETE_MODAL"
  };
};

export const deleteFilm = filmToDelete => {
  return dispatch => {
    dispatch(deleteFilmRequest(filmToDelete));
    return fetch(apiUrl + filmToDelete._id, {
      method: "delete"
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteFilmSuccess(data.film, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(deleteFilmFailed(error));
        });
      }
    });
  };
};

export const deleteFilmRequest = filmToDelete => {
  return {
    type: "DELETE_FILM",
    filmToDelete
  };
};

export const deleteFilmSuccess = (filmToDelete, message) => {
  return {
    type: "DELETE_FILM_SUCCESS",
    filmToDelete: filmToDelete,
    message
  };
};

export const deleteFilmFailed = error => {
  return {
    type: "DELETE_FILM_FAILED",
    error
  };
};
