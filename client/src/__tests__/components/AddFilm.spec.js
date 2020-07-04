import React from "react";
import AddFilm from "../../components/AddFilm";
import { shallow } from "enzyme";
import FilmForm from "../../components/FilmForm";
import expectExport from "expect";

describe("AddFillm component", () => {
  test("should render Film component", () => {
    const wrapper = shallow(<AddFilm />);
    expectExport(wrapper.children(FilmForm).length).toEqual(1);
  });
});
