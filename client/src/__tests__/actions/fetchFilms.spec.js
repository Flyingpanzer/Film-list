import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { fetchFilms } from "../../actions/filmActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  });
};

it("calls request action when fetch is called", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, "response"))
    );

  return store.dispatch(fetchFilms()).then(() => {
    const expectedActions = store.getActions();
    expect(expectedActions).toContainEqual({ type: "FETCH_FILMS_REQUEST" });
  });
});

it("action returns proper response", () => {
  const expectedData = {
    films: [1, 2, 3],
    message: "success",
    success: true
  };
  test("the data is expectedData", () => {
    return fetchFilms().then(data => {
      expect(data).toBe(expectedData);
    });
  });
});
