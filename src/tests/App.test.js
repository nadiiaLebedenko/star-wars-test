import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import {MOVIES_URL} from "../utils/constants";
import {loadData} from "../utils/data-utils";

jest.mock('../utils/data-utils', () => ({
  loadData:  jest.fn(() => Promise.resolve({results: []})),
}));

describe('<App />', () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("loaded movies data", () => {
    render(<App/>);
    expect(loadData).toHaveBeenCalledTimes(1);
    expect(loadData).toHaveBeenCalledWith(MOVIES_URL);
  } )
})

