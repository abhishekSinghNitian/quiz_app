import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
            {text}
        </button>
    );
};

export default Button;
