import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILED,
  ADD_NEW_FILM_REQUEST,
  ADD_NEW_FILM_SUCCESS,
  ADD_NEW_FILM_FAILED,
  SHOW_ADD_MODAL,
  HIDE_ADD_MODAL,
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
} from '../actions/actionType';

export const INITIAL_STATE = {
  films: [],
  searchedFilms: [],
  film: null,
  isFetching: false,
  error: null,
  errorAddMsg: null,
  errorUpload: null,
  success: null,
  successMsg: null,
  successAddMsg: null,
  successUploadMsg: null,
  showDeleteModal: false,
  showUploadModal: null,
  isShowingUploadModal: false,
  filmToDelete: null,
};

export const filmReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...currentState,
        films: [],
        isFetching: true,
      };

    case FETCH_FILMS_SUCCESS:
      return {
        ...currentState,
        films: action.films,
        searchedFilms: [],
        film: null,
        isFetching: false,
        successMsg: action.message,
      };

    case FETCH_FILMS_FAILED:
      return {
        ...currentState,
        films: [],
        isFetching: false,
        error: action.error,
      };

    case ADD_NEW_FILM_REQUEST:
      return {
        ...currentState,
        isFetching: true,
        searchedFilms: [],
      };

    case ADD_NEW_FILM_SUCCESS:
      const nextState = {
        ...currentState,
        films: [...currentState.films, action.film],
        isFetching: false,
        success: action.success,
        successAddMsg: action.message,
      };
      return nextState;

    case ADD_NEW_FILM_FAILED:
      return {
        ...currentState,
        films: currentState.films,
        isFetching: true,
        errorAdd: action.error,
      };

    case SHOW_ADD_MODAL:
      return {
        ...currentState,
        isShowingAddModal: true,
      };

    case HIDE_ADD_MODAL:
      return {
        ...currentState,
        isShowingAddModal: false,
      };

    case ADD_FILE_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        successUploadMsg: action.message,
      };

    case ADD_FILE_FAILED:
      return {
        ...currentState,
        isFetching: true,
        errorUpload: action.error,
      };

    case SHOW_UPLOAD_MODAL:
      return {
        ...currentState,
        isShowingUploadModal: true,
      };

    case HIDE_UPLOAD_MODAL:
      return {
        ...currentState,
        isShowingUploadModal: false,
      };

    case DISPLAY_FILM_BY_ID:
      const filmDetails = currentState.films.find(
        film => film._id === action.filmId,
      );
      return {
        ...currentState,
        film: filmDetails,
      };

    case SEARCH_FILM_SUCCESS:
      return {
        ...currentState,
        searchedFilms: action.film,
        isFetching: false,
        successMsg: action.message,
      };

    case SEARCH_FILM_FAILED:
      return {
        ...currentState,
        searchedFilms: [],
        isFetching: true,
        error: action.error,
      };

    case DELETE_FILM_REQUEST:
      return {
        ...currentState,
        showDeleteModal: true,
        filmToDelete: action.filmToDelete,
      };

    case DELETE_FILM_SUCCESS:
      const filteredFilms = currentState.films.filter(
        film => film._id !== currentState.filmToDelete._id,
      );
      return {
        ...currentState,
        films: filteredFilms,
        successMsg: action.message,
        filmToDelete: action.filmToDelete,
      };

    case DELETE_FILM_FAILED:
      return {
        ...currentState,
        films: currentState.films,
        error: action.error,
        filmToDelete: action.filmToDelete,
      };

    case SHOW_DELETE_MODAL:
      return {
        ...currentState,
        film: null,
        isFetching: false,
        successMsg: null,
        showDeleteModal: true,
        filmToDelete: action.film,
      };

    case HIDE_DELETE_MODAL:
      return {
        ...currentState,
        isFetching: false,
        error: action.error,
        showDeleteModal: false,
        filmToDelete: null,
      };

    case SORT_FILMS:
      const sortedFilms = currentState.films.slice();

      sortedFilms.sort((a, b) => {
        var nameA = a[action.filter].toUpperCase();
        var nameB = b[action.filter].toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      return {
        ...currentState,
        films: sortedFilms,
      };
    default:
      return currentState;
  }
};
