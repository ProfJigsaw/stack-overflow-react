import React from 'react';
import ReactDom from 'react-dom';
import '../public/css/index.css';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello from REACT!</h1>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);
