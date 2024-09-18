import React from 'react';
import Option from './Option';

const Question = ({ questionData, selectedOption, handleOptionChange }) => {
    return (
        <div className="main">
            <h2 className="text-lg font-semibold mb-4">{questionData.question}</h2>
            <div className="space-y-2">
                {questionData.options.map((option, index) => (
                    <Option
                        key={index}
                        optionText={option}
                        optionValue={String.fromCharCode(97 + index)} // a, b, c, d
                        isSelected={selectedOption === String.fromCharCode(97 + index)}
                        handleOptionChange={handleOptionChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
