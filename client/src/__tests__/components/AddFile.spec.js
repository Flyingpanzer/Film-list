import React from "react";
import { mount } from "enzyme";

import AddFile from "../../components/AddFile";

describe("AddFile component", () => {
  const container = mount(<AddFile />);
  const clickFn = jest.fn();

  it("should have an input field", () => {
    expect(
      container.findWhere(
        n => n.name() === "FormControl" && n.prop("type") === "file"
      ).length
    ).toEqual(1);
  });

  it("should have proper props for input field", () => {
    expect(
      container
        .findWhere(n => n.name() === "FormControl" && n.prop("type") === "file")
        .props()
    ).toEqual({
      bsClass: "form-control",
      componentClass: "input",
      name: "filmTitle",
      onChange: expect.any(Function),
      placeholder: "Enter film title",
      type: "file"
    });
  });

  it("should have a submit button", () => {
    expect(
      container.findWhere(
        n => n.name() === "Button" && n.prop("type") === "submit"
      ).length
    ).toEqual(1);
  });

  it("should render a modal when upload is successful", () => {
    let mockIsShowingUploadModal = true;
    const containerWithModal = mount(
      <AddFile isShowingUploadModal={mockIsShowingUploadModal} />
    );
    const propsIsShowingUploadModal = containerWithModal.props()
      .isShowingUploadModal;
    expect(
      containerWithModal.findWhere(
        n => n.name() === "Modal" && n.prop("show") == propsIsShowingUploadModal
      ).length
    ).toEqual(2);
  });

  it("button click should show upload modal", () => {
    const containerWithUpload = mount(<AddFile showUploadModal={clickFn} />);
    containerWithUpload
      .findWhere(n => n.name() === "Button" && n.prop("type") === "submit")
      .simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
