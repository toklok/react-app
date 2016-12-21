import React from 'react';
import axios from 'axios';

class Middle extends React.Component {
    constructor(props) {
        super(props);

        this.rootURL = 'https://jsonplaceholder.typicode.com';
        this.dataSet = [
            { "assignee": "John Smith", "dateDue": "Dec 23rd, 2016", "risk": "High Risk", "value": "$5000", "entity": "Holland & Sherry Store" }
        ];

        this.state = {
            comments: []
        };

    }

    onSubmit(comment) {
        this.setState({ comments: this.state.comments.concat(comment) });
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
                               <span className="dashboard-icon"><i className="fa fa-user" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-2">
                                   <div className="col-lg-12 text-center widget-user_title"><h6>assigned to:</h6></div>
                                   <div className="col-md-12 text-center widget-user_data"><h6>{ this.dataSet[0].assignee }</h6></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-calendar" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-2">
                                   <div className="col-lg-12 text-center widget-user_title"><h6>due date:</h6></div>
                                   <div className="col-md-12 text-center widget-user_data"><h6>{ this.dataSet[0].dateDue }</h6></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-2">
                                   <div className="col-lg-12 text-center widget-user_title"><h6>risk factor:</h6></div>
                                   <div className="col-md-12 text-center widget-user_data"><h6>{ this.dataSet[0].risk }</h6></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-usd" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-2">
                                   <div className="col-lg-12 text-center widget-user_title"><h6>values:</h6></div>
                                   <div className="col-md-12 text-center widget-user_data"><h6>{ this.dataSet[0].value }</h6></div>
                               </section>
                               <section className="dashboard-entity">
                                   <span className="dashboard-icon"><i className="fa fa-usd" aria-hidden="true"/></span>
                                   <section className="widget-user col-lg-2">
                                       <div className="col-lg-12 text-left widget-user_title"><h6>entity:</h6></div>
                                       <div className="col-md-12 text-left widget-user_data"><h6>{ this.dataSet[0].entity }</h6></div>
                                   </section>
                               </section>
                                    <section className="dashboard-notifications">
                                        Store <a href="#">Boston(130)</a> was found with High Damage Registration for High Risk Products in the last 7 days compare to previous 14 days and compare to North region bench mark activity.
                                    </section>
                               </section>
                            <section className="col-lg-4 col-md-4 col-sm-4">
                                <section className="main-dashboard_panel">
                                    <section className="main-dashboard_title">Status</section>
                                </section>
                                <section className="main-dashboard_info">
                                    In Progress
                                </section>
                            </section>
                            <section className="col-lg-8 col-md-8 col-sm-8">
                                <ul>
                                    <li>Caught Items(4)</li>
                                    <li>Best Practices(3)</li>
                                    <li>Tasks(3)</li>
                                    <li>History</li>
                                </ul>
                            </section>
                            <section className="col-lg-4 col-md-4 col-sm-4">
                            </section>
                            <section className="col-lg-8 col-md-8 col-sm-8">
                                <input type="text" name="commentBox" ref="commentField" />
                                <button onClick={
                                    () => {
                                        this.onSubmit(this.refs.commentField.value);
                                    }
                                }>
                                    Send</button>
                            </section>
                            <section className="col-lg-8 col-md-8 col-sm-8">
                                <ul>
                                {
                                    (this.state.comments.length !== 0) ? this.state.comments.map((key, index) => {
                                        return <li key={ index }>{key}</li>
                                    }) : <h3>No comments!</h3>

                                }
                                </ul>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Middle;