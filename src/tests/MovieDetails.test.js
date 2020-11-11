import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetails from '../components/MovieDetails';

import {MOVIES_URL} from "../utils/constants";
import {loadData} from "../utils/data-utils";

jest.mock('../utils/data-utils', () => ({
    loadData:  jest.fn(() => Promise.resolve({results: []})),
}));

const CHARACTERS_URL = "https://swapi.dev/api/people/1/";
const movie = {
    "characters": [
        CHARACTERS_URL
    ],
    "director": "George Lucas",
    "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    "release_date": "1977-05-25",
    "title": "A New Hope",
}

describe('<MovieDetails />', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<MovieDetails movie={movie}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("loaded movies data", () => {
        render(<MovieDetails movie={movie}/>);
        expect(loadData).toHaveBeenCalledTimes(1);
        expect(loadData).toHaveBeenCalledWith(CHARACTERS_URL);
    } )
})

