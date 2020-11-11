import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../components/Error';

import {ERROR_MESSAGE} from "../utils/constants";


describe('<Error />', () => {

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Error error={ERROR_MESSAGE}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})

