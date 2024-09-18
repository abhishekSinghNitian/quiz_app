import React from 'react';

const Option = ({ optionText, optionValue, isSelected, handleOptionChange }) => {
    return (
        <div className="box flex items-center space-x-2">
            <input
                type="radio"
                name="option"
                id={`option${optionValue}`}
                value={optionValue}
                checked={isSelected}
                onChange={handleOptionChange}
                className="selectOption"
            />
            <label htmlFor={`option${optionValue}`} className="text-black-700 text-xl">
                {optionText}
            </label>
        </div>
    );
};

export default Option;
