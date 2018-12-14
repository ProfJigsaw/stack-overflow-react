import React, { Component } from 'react';
import HomeContent from '../containers/homecontent';

export default class Homepage extends Component {
  render() {
    return (
      <HomeContent {...this.props} />
    );
  }
}
