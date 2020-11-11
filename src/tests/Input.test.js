import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/Input';
import {render, fireEvent, screen} from "@testing-library/react";

import {PLACEHOLDER_MESSAGE} from '../utils/constants';

const onSearch = jest.fn();

describe('<Input />', () => {

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Input onSearch={onSearch}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("called onSearch on Enter click", () => {
        render(<Input onSearch={onSearch}/>);
        fireEvent.keyUp(screen.getByPlaceholderText(PLACEHOLDER_MESSAGE), { key: 'Enter', code: 'Enter' })
        expect(onSearch).toHaveBeenCalledTimes(1);
    });
})

