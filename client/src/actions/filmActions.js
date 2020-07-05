import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILED,
  ADD_NEW_FILM_REQUEST,
  ADD_NEW_FILM_SUCCESS,
  ADD_NEW_FILM_FAILED,
  ADD_FILE_SUCCESS,
  ADD_FILE_FAILED,
  SHOW_UPLOAD_MODAL,
  DISPLAY_FILM_BY_ID,
  HIDE_UPLOAD_MODAL,
  SEARCH_FILM_SUCCESS,
  SEARCH_FILM_FAILED,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  DELETE_FILM_REQUEST,
  DELETE_FILM_SUCCESS,
  DELETE_FILM_FAILED,
  SORT_FILMS,
} from './actionType';

const apiUrl = '/api/';
const searchUrl = 'search';
const uploadUrl = 'upload';

export const fetchFilms = () => {
  return dispatch => {
    dispatch(fetchFilmsRequest());
    return fetch(apiUrl).then(response => {
      if (response.ok) {
        response.json().then(data => {
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
    type: FETCH_FILMS_REQUEST,
  };
};

export const fetchFilmsSuccess = (films, message) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    films: films,
    message,
  };
};

export const fetchFilmsFailed = error => {
  return {
    type: FETCH_FILMS_FAILED,
    error,
  };
};

export const addNewFilm = film => {
  return dispatch => {
    dispatch(addNewFilmRequest(film));
    return fetch(apiUrl, {
      method: 'post',
      body: film,
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
    type: ADD_NEW_FILM_REQUEST,
    film,
  };
};

export const addNewFilmRequestSuccess = (film, message) => {
  return {
    type: ADD_NEW_FILM_SUCCESS,
    film,
    message,
  };
};

export const addNewFilmRequestFailed = error => {
  return {
    type: ADD_NEW_FILM_FAILED,
    error,
  };
};

export const addFile = file => {
  return dispatch => {
    return fetch(apiUrl + uploadUrl, {
      method: 'post',
      body: file,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(addFileRequestSuccess(data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addFileRequestFailed(error));
        });
      }
    });
  };
};

export const addFileRequestSuccess = message => {
  return {
    type: ADD_FILE_SUCCESS,
    message,
  };
};

export const addFileRequestFailed = error => {
  return {
    type: ADD_FILE_FAILED,
    error,
  };
};

export const showUploadModal = () => {
  return {
    type: SHOW_UPLOAD_MODAL,
  };
};

export const hideUploadModal = () => {
  return {
    type: HIDE_UPLOAD_MODAL,
  };
};

export const displayFilmById = filmId => {
  return {
    type: DISPLAY_FILM_BY_ID,
    filmId,
  };
};

export const searchFilm = searchData => {
  return dispatch => {
    return fetch(apiUrl + searchUrl, {
      method: 'post',
      body: searchData,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(searchFilmRequestSuccess(data.film, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(searchFilmRequestFailed(error));
        });
      }
    });
  };
};

export const searchFilmRequestSuccess = (film, message) => {
  return {
    type: SEARCH_FILM_SUCCESS,
    film: film,
    message: message,
  };
};

export const searchFilmRequestFailed = error => {
  return {
    type: SEARCH_FILM_FAILED,
    error,
  };
};

export const showDeleteModal = filmToDelete => {
  return {
    type: SHOW_DELETE_MODAL,
    film: filmToDelete,
  };
};

export const hideDeleteModal = () => {
  return {
    type: HIDE_DELETE_MODAL,
  };
};

export const deleteFilm = filmToDelete => {
  return dispatch => {
    dispatch(deleteFilmRequest(filmToDelete));
    return fetch(apiUrl + filmToDelete._id, {
      method: 'delete',
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
    type: DELETE_FILM_REQUEST,
    filmToDelete,
  };
};

export const deleteFilmSuccess = (filmToDelete, message) => {
  return {
    type: DELETE_FILM_SUCCESS,
    filmToDelete: filmToDelete,
    message,
  };
};

export const deleteFilmFailed = error => {
  return {
    type: DELETE_FILM_FAILED,
    error,
  };
};

export const sortFilm = filter => {
  return {
    type: SORT_FILMS,
    filter,
  };
};
