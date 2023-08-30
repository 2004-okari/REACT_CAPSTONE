import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";

describe('Navbar component', () => {
    it('renders correctly', () => {
      const { tree } = render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );
      expect(tree).toMatchSnapshot();
    });
  });
  