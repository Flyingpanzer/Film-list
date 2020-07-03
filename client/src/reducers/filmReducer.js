export const INITIAL_STATE = {
  films: [],
  searchedFilms: [],
  film: null,
  isFetching: false,
  error: null,
  errorUpload: null,
  successMsg: null,
  successUploadMsg: null,
  showDeleteModal: false,
  showUploadModal: null,
  isShowingUploadModal: false,
  filmToDelete: null
};

export const filmReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_FILMS_REQUEST":
      return {
        ...currentState,
        films: [],
        searchedFilms: [],
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
        searchedFilms: [],
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
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
        isFetching: true,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "ADD_FILE_REQUEST":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "ADD_FILE_REQUEST_SUCCESS":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
        isFetching: false,
        error: null,
        successMsg: null,
        successUploadMsg: action.message,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "ADD_FILE_REQUEST_FAILED":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
        isFetching: true,
        error: null,
        errorUpload: action.error,
        successMsg: null,
        successUploadMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "SHOW_UPLOAD_MODAL":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
        isFetching: false,
        successMsg: null,
        showDeleteModal: false,
        isShowingUploadModal: true,
        filmToDelete: null
      };

    case "HIDE_UPLOAD_MODAL":
      return {
        ...currentState,
        isShowingUploadModal: false
      };

    case "DISPLAY_FILM_BY_ID":
      const filmDetails = currentState.films.find(
        film => film._id === action.filmId
      );
      return {
        ...currentState,
        film: filmDetails
      };

    case "SEARCH_FILM_REQUEST":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        filmToDelete: null
      };

    case "SEARCH_FILM_REQUEST_SUCCESS":
      return {
        ...currentState,
        searchedFilms: action.film,
        isFetching: false,
        successMsg: action.message,
        showDeleteModal: false
      };

    case "SEARCH_FILM_REQUEST_FAILED":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
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
        searchedFilms: [],
        film: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        filmToDelete: action.filmToDelete
      };

    case "SHOW_DELETE_MODAL":
      return {
        ...currentState,
        films: currentState.films,
        searchedFilms: [],
        film: null,
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

    case "SORT_FILMS":
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
        films: sortedFilms
      };
    default:
      return currentState;
  }
};
