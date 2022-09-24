import React from 'react';
import { useState } from 'react';

import helper from "../../helper/helper";
const SearchBarByeSuggestion = () => {

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    let words = [
        "Channel",
        "CodingLab",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to become Freelancer",
        "How to become Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?",
    ];

    const inputChnaged = (e) => {
        let value = e.target.value;
        setInputValue(value);
        let suggestionWords = words.filter(word =>
            word.includes(value)
        );
        if (suggestionWords.length >= 1) {
            setSuggestions(suggestionWords);
        } else setSuggestions([value])

        if (value === '') {
            setSuggestions([])
        }
    };

    const suggestionClicked = (value) => {
        setInputValue(value);
        setSuggestions([]);
    }

    return (
        <div className='grid pt-10 grid-cols-12'>

            <input className='input text-lg col-start-6 col-span-3'
                value={inputValue}
                onChange={inputChnaged} />

            {!helper.isEmpty(suggestions) &&
                <ul className='mt-2 col-start-6 col-span-3 border-gray-solid p-5'>

                    {suggestions.map(item =>
                        <li value={item}
                            onClick={() => suggestionClicked(item)}
                            className='py-2 cursor-pointer hover:text-red-800 hover:bg-red-50 hover:rounded-lg hover:px-2'>
                            {item}
                        </li>
                    )}

                </ul>
            }
        </div>
    );
};

export default SearchBarByeSuggestion;