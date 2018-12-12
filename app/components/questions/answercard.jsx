import React from 'react';

export default ({ answer }) => {
    let date = new Date(answer.createdAt);
    return (
        <div>
            <div className="answer-card">
                <div className="side-panel-info">
                    <div className="profile-img">
                        <img src="../../../public/assets/default.png" id="profile-pic" />
                    </div>
                </div>
                <div className="answer-frame">
                    <div className="question-title">
                        <p>{answer.username} - Answered: {date.toLocaleTimeString() + ' - ' + date.toLocaleDateString()}</p>
                        {answer.state ? (<span><i className="fa fa-check fa-2x" style={{color: 'green'}}/></span>) : (<div />)}
                    </div>
                    <hr />
                    <div className="answer-body">
                        {answer.answer}
                    </div>
                    <div className="answer-misc">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
