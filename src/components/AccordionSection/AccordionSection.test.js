import React from "react";
import { shallow } from "enzyme";

import AccordionSection from "./index";

it("renders title provided", () => {
  const wrapper = shallow(<AccordionSection title="Hello" />);
  expect(wrapper.find(".accordion-title").text()).toEqual("Hello");
});

it("opens and closes the accordion", () => {
  const wrapper = shallow(<AccordionSection title="Hello" />);
  expect(wrapper.find(".accordion-body").length).toBe(0);
  wrapper.find(".accordion-toggle").simulate("click");
  expect(wrapper.find(".accordion-body").length).toBe(1);
});

it("changes the icon", () => {
  const wrapper = shallow(<AccordionSection title="Hello" />);
  expect(wrapper.find(".accordion-toggle-icon").prop("src")).toBe(
    "/arrow_right-24px.svg"
  );
  wrapper.find(".accordion-toggle").simulate("click");
  expect(wrapper.find(".accordion-toggle-icon").prop("src")).toBe(
    "/arrow_drop_down-24px.svg"
  );
});
