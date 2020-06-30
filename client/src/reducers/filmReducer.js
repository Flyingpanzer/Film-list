export const INITIAL_STATE = {
  films: [],
  film: null,
  isFetching: false,
  error: null,
  errorUpload: null,
  successMsg: null,
  successUploadMsg: null,
  showDeleteModal: false,
  showUploadModal: null,
  filmToDelete: null
};

export const filmReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_FILMS_REQUEST":
      return {
        ...currentState,
        films: [],
        film: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "FETCH_FILMS_SUCCESS":
      return {
        ...currentState,
        films: action.films,
        film: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "FETCH_FILMS_FAILED":
      return {
        ...currentState,
        films: [],
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "ADD_NEW_FILM_REQUEST":
      return {
        ...currentState,
        films: currentState.films,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "ADD_NEW_FILM_REQUEST_SUCCESS":
      const nextState = {
        ...currentState,
        films: [...currentState.films, action.film],
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        filmToDelete: null
      };
      return nextState;

    case "ADD_NEW_FILM_REQUEST_FAILED":
      return {
        ...currentState,
        films: currentState.films,
        isFetching: true,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "DELETE_FILM":
      return {
        ...currentState,
        films: currentState.films,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        filmToDelete: action.filmToDelete
      };

    case "DELETE_FILM_SUCCESS":
      const filteredFilms = currentState.films.filter(
        film => film._id !== currentState.filmToDelete._id
      );
      return {
        ...currentState,
        films: filteredFilms,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        filmToDelete: action.filmToDelete
      };

    case "DELETE_FILM_FAILED":
      return {
        ...currentState,
        films: currentState.films,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        filmToDelete: action.filmToDelete
      };

    case "DISPLAY_FILM_BY_ID":
      const filmDetails = currentState.films.find(
        film => film._id === action.filmId
      );
      return {
        ...currentState,
        film: filmDetails
      };

    case "SHOW_DELETE_MODAL":
      return {
        ...currentState,
        films: currentState.films,
        isFetching: false,
        successMsg: null,
        showDeleteModal: true,
        filmToDelete: action.film
      };

    case "HIDE_DELETE_MODAL":
      return {
        ...currentState,
        film: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    default:
      return currentState;
  }
};
