import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { List as Waiter } from 'react-content-loader';
import MainLayout from '../containers/layouts/mainlayout';
import ContentLayout from '../containers/layouts/contentlayout';
import Profile from '../profile/profile';
import QuestionCard from '../questions/questioncard';
import AnswerCard from '../profile/answercard';
import { getToken } from '../../utilities/auth';
import { userProfileRequest } from '../../actions/actions';

class ProfilePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayQuestions: false,
      displayAnswers: false
    };
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.toggleQuestions = this.toggleQuestions.bind(this);
  }

  componentDidMount() {
    const { profileRequest } = this.props;
    profileRequest();
  }

  toggleQuestions() {
    this.setState({
      displayQuestions: true,
      displayAnswers: false
    });
  }

  toggleAnswers() {
    this.setState({
      displayQuestions: false,
      displayAnswers: true
    });
  }

  render() {
    if (!getToken()) {
      return (<Redirect to="/" />);
    }
    const { questions, answers, loaded } = this.props;
    const { displayQuestions, displayAnswers } = this.state;
    return (
      <MainLayout nav>
        <ContentLayout {...this.props}>
          {
            loaded
              ? <Profile
                questions={questions}
                answers={answers}
                toggleQuestions={this.toggleQuestions}
                toggleAnswers={this.toggleAnswers}
              />
              : <div><br /><Waiter /><Waiter /></div>
          }
          {
            displayQuestions && questions ? questions.map(
              (question, index) => (<QuestionCard
                key={index}
                question={question}
              />)
            ) : null
          }
          {
            displayAnswers && answers ? answers.map(
              (answer, index) => (<AnswerCard
                key={index}
                answer={answer}
              />)
            ) : null
          }
        </ContentLayout>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.profile.questions,
  answers: state.profile.answers,
  loaded: state.profile.loaded
});

export default connect(mapStateToProps, {
  profileRequest: userProfileRequest
})(ProfilePage);
