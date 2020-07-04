import React from "react";
import { mount } from "enzyme";

import FilmDetails from "../../components/FilmDetails";

const filmDetails = {
  filmTitle: "Stalker",
  filmYear: "1979	",
  filmFormat: "VHS",
  filmStars: "Alexander Kaidanovsky"
};
describe("SearchDetails component", () => {
  test("receive props and renders", () => {
    const wrapper = mount(<FilmDetails filmDetails={filmDetails} />);

    expect(wrapper).toMatchSnapshot();
  });
});
