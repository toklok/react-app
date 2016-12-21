import React from 'react';
import Header from './header';
import Middle from './middle';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Middle />
            </div>
            )
    }
}

export default Main;