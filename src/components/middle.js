import React from 'react';
import axios from 'axios';

class Middle extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://jsonplaceholder.typicode.com';
    }


    componentDidMount() {
        axios.get(this.rootURL + '/posts/1')
    }

    render() {
        return (
            <section className="col-lg-12 col-md-12 col-sm-12 main-dashboard">
                <section className="col-lg-12 col-md-12 col-sm-12">
                    <section className="panel panel-default">
                        <section className="main-panel_heading"><span className="main-dashboard_span">Opportunities</span> { `${this.props.title}` }</section>
                        <section className="panel-body">
                           <section className="col-lg-8 col-md-8 col-sm-8">
                                   <section className="col-lg-2">
                                       Test
                                   </section>
                                   <section className="col-lg-2">
                                       Test
                                   </section>
                                   <section className="col-lg-2">
                                       Test
                                   </section>
                                   <section className="col-lg-2">
                                       Test
                                   </section>
                                    <section className="col-lg-12">
                                        Test
                                    </section>
                                    <section className="col-lg-12">
                                        Store <a href="#">Boston(130)</a> was found with High Damage Registration for High Risk Products in the last 7 days compare to previous 14 days and compare to North region bench mark activity.
                                    </section>
                               </section>
                            <section className="col-lg-4 col-md-4 col-sm-4">
                                <section className="main-dashboard_panel">
                                    <h1>Status</h1>
                                </section>
                                <section className="main-dashboard_info">
                                    In Progress
                                </section>
                            </section>
                            <section className="col-lg-8 col-md-8 col-sm-8">
                                <h1>Test</h1>
                            </section>
                            <section className="col-lg-4 col-md-4 col-sm-4">
                                <h1>Test</h1>
                            </section>
                        </section>
                        <section style={{ color: 'blue'}} className="panel-footer">{ `${ 8 * 256 }` }</section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Middle;