import React from 'react';
import { Link } from 'react-router-dom';

export default ({ question }) => {
    let date = new Date(question.createdAt);
    return (
        <div>
            <div className="question-card">
                <div className="side-panel-info">
                    <div className="profile-img">
                        <img src="../../../public/assets/default.png" id="profile-pic" />
                    </div>
                </div>
                <div className="question-frame">
                    <div className="question-title">
                        <p>{question.username} - Asked: {date.toLocaleTimeString() + ' - ' + date.toLocaleDateString()}</p>
                        <Link to={`/questions/${question.questionid}`} className="link router-link">{question.title}</Link>
                    </div>
                    <hr />
                    <div className="question-body">
                        {question.question}
                    </div>
                    <div className="question-misc">
                        Question misc
                    </div>
                </div>
            </div>
        </div>
    );
}
