import React from 'react';

export default ({ children, match }) => {
        return (
            <div className="main-content">
                <div className="col col-1">
					<div className="wrapper">
						<ul className="stack-links">
							<li className="side-links"><i className="fas fa-home"></i>Home</li>
							<li className="side-links"><i className="fas fa-book"></i>Questions</li>
							<li className="side-links"><i className="fas fa-tags"></i>Tags</li>
							<li className="side-links"><i className="fas fa-users"></i>Users</li>
						</ul>
					</div>
				</div>

				<div className="col col-2">
					<div className="home">
						<i className="fas fa-home"><span className="question-url">Home{match.url}</span></i>
					</div>
					  {children}
				</div>
				<div className="col col-3">
				<input id='ask' className="form-control" type="submit" placeholder="ASK" value="Ask A Question"/>
				<hr />
				<div className="activity">
					Top Question
				</div>
				</div>
            </div>
        );
};
