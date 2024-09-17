import React, { useState } from 'react';

const QuizComponent = ({ data }) => {
    // Initialize state with null for all questions
    const [selectedOptions, setSelectedOptions] = useState(Array(data.questions.length).fill(null));
    const [showAnswers, setShowAnswers] = useState(false);

    const handleOptionClick = (questionIndex, optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
        setShowAnswers(true); // Show answers when an option is selected
    };

    const resetQuiz = () => {
        // Reset both selected options and background color
        setSelectedOptions(Array(data.questions.length).fill(null));
        setShowAnswers(false);
    };

    return (
        <div className='container' style={{ backgroundColor: '#ffccd4', padding: '20px' }}>
            {/* Reset button to reset the quiz */}

            {data.questions.map((question, qIndex) => (
                <div key={qIndex} style={{ marginBottom: '15px' }}>
                    <h5>{question.question}</h5>
                    <ol style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        {question.options.map((option, oIndex) => (
                            <li
                                key={oIndex}
                                style={{
                                    marginBottom: '5px', // Less margin between options
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
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
            <button onClick={resetQuiz} style={{ marginBottom: '20px' }}>
                Reset Quiz
            </button>

        </div>
    );
};

export default QuizComponent;
