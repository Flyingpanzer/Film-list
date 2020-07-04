import {
  addNewFilmRequestFailed,
  displayFilmById,
  searchFilmRequestSuccess
} from "../../actions/filmActions";

it("addNewFilmRequestFailed(): should create an action to set error", () => {
  const expectedAction = {
    type: "ADD_NEW_FILM_REQUEST_FAILED",
    error: undefined
  };
  expect(addNewFilmRequestFailed()).toEqual(expectedAction);
});

it("displayFilmById(): should create an action to set film id", () => {
  const expectedAction = {
    type: "DISPLAY_FILM_BY_ID",
    filmId: undefined
  };
  expect(displayFilmById()).toEqual(expectedAction);
});

it("searchFilmRequestSuccess(): should create an action to set film and success message", () => {
  const expectedAction = {
    type: "SEARCH_FILM_REQUEST_SUCCESS",
    film: undefined,
    message: undefined
  };
  expect(searchFilmRequestSuccess()).toEqual(expectedAction);
});
