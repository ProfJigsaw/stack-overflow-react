import React from 'react';
import { Redirect } from 'react-router-dom';
import MainLayout from '../containers/layouts/mainlayout';
import ContentLayout from '../containers/layouts/contentlayout';
import Ask from '../ask/ask';
import { getToken } from '../../utilities/auth';

/**
 * Functional component to
 * render the component to create
 * a new question.
 * @param {object} props
 * @returns {object}
 */
export default function newquestion(props) {
  if (!getToken()) {
    return (<Redirect to="/login" />);
  }
  return (
    <MainLayout nav {...props}>
      <ContentLayout {...props}>
        <Ask {...props} />
      </ContentLayout>
    </MainLayout>
  );
}
