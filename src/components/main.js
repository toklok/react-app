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
                <Header name="Abercrombie & Fitch" color="white" background="rgb(51,51,51)"/>
                <Middle title="EV-15 High Damage Registration"/>
            </div>
            )
    }
}

export default Main;