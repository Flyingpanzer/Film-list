import { INITIAL_STATE, filmReducer } from "../../reducers/filmReducer";

describe("filmReducer", () => {
  it("SHOW_UPLOAD_MODAL", () => {
    const action = {
      type: "SHOW_UPLOAD_MODAL"
    };

    expect(filmReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      isShowingUploadModal: true
    });
  });

  it("SEARCH_FILM_REQUEST_FAILED", () => {
    const action = {
      type: "SEARCH_FILM_REQUEST_FAILED",
      error: true,
      isFetching: true
    };

    expect(filmReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      error: action.error,
      isFetching: true
    });
  });

  it("FETCH_FILMS_SUCCESS", () => {
    const action = {
      type: "FETCH_FILMS_SUCCESS",
      films: [{ key: "obj" }],
      message: undefined
    };

    expect(filmReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      films: action.films,
      successMsg: action.message
    });
  });
});
