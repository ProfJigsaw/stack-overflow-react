import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Footer from '../../footer/footer';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="background">
        <Header {...this.props}/>
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
