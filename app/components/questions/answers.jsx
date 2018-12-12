import React from 'react';
import AnswerCard from './answercard.jsx';

export default ({ answers }) => {
    return (
        <div>
            {answers.map((answer, i) => {
                return (
                    <AnswerCard key={i} answer={answer} />
                );
            })}
        </div>
    );
}