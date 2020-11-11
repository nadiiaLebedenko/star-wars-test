import React, {useState} from 'react';
import search from '../assets/search.svg';
import {PLACEHOLDER_MESSAGE} from '../utils/constants';


function Input({onSearch}) {
    const [title, setTitle] = useState('');
    const onChange = (e) => setTitle(e.target.value);
    const onClick = () => {
        onSearch(title);
    }
    const onKeyUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(e.key === 'Enter'){
            onClick();
        }
    }


    return <div
        className='App-input-container'
        onKeyUp={onKeyUp}
    >
        <input
            name='title'
            key='title'
            type='text'
            className='App-input'
            placeholder={PLACEHOLDER_MESSAGE}
            autoComplete='off'
            onChange={onChange}
        />
        <button className='App-input-button' onClick={onClick}>
            <img src={search} alt="search"/>
        </button>
    </div>
}

export default Input;
