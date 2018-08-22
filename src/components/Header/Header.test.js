import React from "react";
import { MemoryRouter } from "react-router";
import Header from "./Header";
import { configure } from "enzyme";
import { createMount, createShallow } from "@material-ui/core/test-utils";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  const mount = createMount();
  const shallow = createShallow();
  const drinkPath = "/drinks/1";
  const home = "/";
  it("test icon button in / to be 0", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[home]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find("IconButton").length).toBe(0);
  });

  it("test icon button in /drinks/1 to be 1", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[drinkPath]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find("IconButton").length).toBe(1);
  });

  it("test icon button func to go from /drinks/1 to /", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[drinkPath]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find("Router").props().history.location.pathname).toBe(
      drinkPath
    );
    // history push to  "/"
    wrapper
      .find("IconButton")
      .props()
      .onClick();
    expect(wrapper.find("Router").props().history.location.pathname).toBe(
      home
    );
    expect(wrapper.find("IconButton").length).toBe(1);
  });

  it("snapshot test /drinks", () => {
    let wrapper = shallow(
      <MemoryRouter initialEntries={[drinkPath]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
