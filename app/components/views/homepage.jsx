import React, { Component } from 'react'
import QuestionLayout from '../questions/questionslayout.jsx';

export default class Homepage extends Component {
  render() {
    return (
      <QuestionLayout {...this.props} />
    )
  }
}
