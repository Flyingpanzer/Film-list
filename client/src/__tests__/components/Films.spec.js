import React from "react";
import { mount, shallow } from "enzyme";
import expectExport from "expect";

import Films from "../../components/Films";
import ToolBar from "../../containers/ToolBar";
import FilmDetails from "../../containers/FilmDetails";

describe("FilmForm component", () => {
  test("should render ToolBar component", () => {
    const wrapper = shallow(<Films />);
    expectExport(wrapper.find(ToolBar).length).toEqual(1);
  });

  test("should render FilmDetails component", () => {
    const wrapper = shallow(<Films />);
    expectExport(wrapper.find(FilmDetails).length).toEqual(1);
  });
});
