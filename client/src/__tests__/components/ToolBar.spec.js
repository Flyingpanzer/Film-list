import React from "react";
import { shallow } from "enzyme";
import ToolBar from "../../components/ToolBar";

describe("ToolBar component", () => {
  test("should pass title as argument to sort function", () => {
    let passedFilterType = "";
    const sortFilm = sortType => {
      passedFilterType = sortType;
    };
    const wrapper = shallow(<ToolBar sortFilm={sortFilm} />);
    const button = wrapper.find("#btn");
    button.simulate("click");
    expect(passedFilterType).toBe("filmTitle");
  });
});
