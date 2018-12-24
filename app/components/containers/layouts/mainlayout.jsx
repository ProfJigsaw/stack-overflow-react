import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Footer from '../../footer/footer';

class MainLayout extends React.Component {
  render() {
    const { children, nav } = this.props;
    return (
      <div className="background">
        <Header nav={nav}/>
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  nav: PropTypes.bool.isRequired
};

export default MainLayout;
