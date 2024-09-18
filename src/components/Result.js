import React from 'react';

const Result = ({ score }) => {
    return (
        <div className="mt-6">
            <p className="text-center text-lg font-bold text-gray-700">
                Your Score: {score}
            </p>
        </div>
    );
};

export default Result;
