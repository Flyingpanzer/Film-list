import React from "react";
import { shallow } from "enzyme";

import SearchDetails from "../../components/SearchDetails";

const searchedFilms = {
  filmTitle: "Leon",
  filmYear: "1994",
  filmFormat: "VHS",
  filmStars: "Luc Besson"
};
describe("SearchDetails component", () => {
  test("receive props and renders", () => {
    const wrapper = shallow(<SearchDetails searchedFilms={searchedFilms} />);

    expect(wrapper).toMatchSnapshot();
  });
});
