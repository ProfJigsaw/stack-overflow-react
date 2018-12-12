import React from 'react';
import Header from '../../header/header.jsx';
import Footer from '../../footer/footer.jsx';

class MainLayout extends React.Component {
    render () {
        return (
            <div className="background">
                <Header nav={this.props.nav}/>
                {this.props.children}
                <Footer />
            </div>
           
        );
    }
}

export default MainLayout;
