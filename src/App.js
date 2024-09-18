import React, { useState } from "react";
import Button from "./components/Button";
import Question from "./components/Question";
import Result from "./components/Result";
import data from './data/Question_data'; // Adjust the path to your QuestionData.js file

const Quiz = () => {
    // State for current question, selected option, score, and quiz submission status
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Get the current question data from QuestionData.js
    const questionData = data[currentQuestion];

    // Handle option selection
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Submit the quiz or move to the next question
    const submitQuiz = () => {
        // Check if the selected option is correct
        if (selectedOption === questionData.correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or end quiz
        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null); // Reset option
        } else {
            setIsSubmitted(true); // End the quiz when no more questions
        }
    };

    // Restart the quiz
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setIsSubmitted(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 shadow-lg shadow-slate-800">
            <div className="bg-slate-500 p-8 rounded-lg shadow-2xl shadow-orange-800 w-96">
                <h1 className="text-2xl font-bold mb-4 text-center">Quiz Game</h1>

                {/* Conditionally render Question or Result */}
                {!isSubmitted ? (
                    <Question
                        questionData={questionData}
                        selectedOption={selectedOption}
                        handleOptionChange={handleOptionChange}
                    />
                ) : (
                    <Result score={score} />
                )}

                {/* Submit or Restart Button */}
                {!isSubmitted ? (
                    <Button text="Submit" onClick={submitQuiz} />
                ) : (
                    <Button text="Restart Quiz" onClick={restartQuiz} />
                )}
            </div>
        </div>
    );
};

export default Quiz;
