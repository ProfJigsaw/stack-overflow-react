import React from 'react';
import QuestionCard from './questioncard.jsx';

export default ({ questions }) => {
    return (
        <div>
            {questions.map((question, i) => {
                return (
                    <QuestionCard key={i} question={question} />
                );
            })}
        </div>
    );
}