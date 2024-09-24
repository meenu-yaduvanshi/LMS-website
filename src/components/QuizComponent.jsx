import React, { useState } from 'react';

const QuizComponent = ({ data }) => {
    // Initialize state with null for all questions
    const [selectedOptions, setSelectedOptions] = useState(Array(data.questions.length).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    // Function to handle option selection
    const handleOptionClick = (questionIndex, optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
    };

    // Function to reset the quiz
    const resetQuiz = () => {
        setSelectedOptions(Array(data.questions.length).fill(null));
        setShowAnswers(false);
    };

    // Function to check if all questions are answered
    const allQuestionsAnswered = () => {
        return selectedOptions.every(option => option !== null); // Returns true if all questions are answered
    };

    // Function to submit quiz and show answers
    const handleSubmitQuiz = () => {
        if (allQuestionsAnswered()) {
            setShowAnswers(true); // Show answers only when all questions are answered
        }
    };

    // Calculate the score based on correct answers
    const calculateScore = () => {
        return selectedOptions.reduce((score, selectedOption, index) => {
            if (selectedOption === data.questions[index].answer) {
                return score + 1; // Increase score if the selected option is correct
            }
            return score;
        }, 0);
    };

    // Create a meaningful result message
    const getResultMessage = () => {
        const score = calculateScore();
        const totalQuestions = data.questions.length;

        if (score === totalQuestions) {
            return `Excellent! You got all ${totalQuestions} correct!`;
        } else if (score === 0) {
            return `Oops! You didn't get any correct. Better luck next time!`;
        } else {
            return `You got ${score} out of ${totalQuestions} correct. Keep practicing!`;
        }
    };

    return (
        <div className='container' style={{ backgroundColor: '#f2edd0', padding: '20px', border: '1px solid black' }}>
            {data.questions.map((question, qIndex) => (
                <div key={qIndex} style={{ marginBottom: '15px' }}>
                    <h5>{question.question}</h5>
                    <ol style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        {question.options.map((option, oIndex) => (
                            <li
                                key={oIndex}
                                style={{
                                    marginBottom: '5px',
                                    padding: '1px',
                                    fontSize: '20px',
                                    backgroundColor:
                                        selectedOptions[qIndex] !== null && showAnswers
                                            ? oIndex === question.answer
                                                ? 'lightgreen' // Correct answer
                                                : selectedOptions[qIndex] === oIndex
                                                    ? ' #ff8093' // Wrong answer selected
                                                    : 'transparent'
                                            : 'transparent',
                                    borderRadius: '5px',
                                }}
                            >
                                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        value={oIndex}
                                        checked={selectedOptions[qIndex] === oIndex}
                                        onChange={() => handleOptionClick(qIndex, oIndex)}
                                        style={{ marginRight: '10px' }}
                                        disabled={selectedOptions[qIndex] !== null} // Disable after selection
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}

            {/* Show the result only if answers are revealed */}
            {showAnswers && (
                <div style={{ marginTop: '20px', fontSize: '20px' }}>
                    {getResultMessage()}
                </div>
            )}

            <button
                onClick={handleSubmitQuiz}
                style={{ marginTop: '20px' }}
                disabled={!allQuestionsAnswered()} // Disable button until all questions are answered
            >
                Submit Quiz
            </button>

            <button onClick={resetQuiz} style={{ marginTop: '20px', marginLeft: '10px' }}>
                Reset Quiz
            </button>
        </div>
    );
};

export default QuizComponent;
