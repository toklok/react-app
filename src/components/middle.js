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

    removeComment(index) {
        this.setState({ comments: this.state.comments.filter((curr, i) => i !== index) })
    };


    componentDidMount() {
        axios.get(this.rootURL + '/posts/1')
    }

    render() {
        return (
            <section className="col-lg-12 main-dashboard">
                <section className="col-lg-12">
                    <section className="panel panel-default">
                        <section className="main-panel_heading"><span className="main-dashboard_span">Opportunities</span> { `${this.props.title}` }</section>
                        <section className="panel-body">
                           <section className="col-lg-9">
                               <span className="dashboard-icon"><i className="fa fa-user" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-3">
                                   <div className="widget-user_title"><h4>assigned to:</h4></div>
                                   <div className="widget-user_data"><h3>{ this.dataSet[0].assignee }</h3></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-calendar" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-3">
                                   <div className="widget-user_title"><h4>due date:</h4></div>
                                   <div className="widget-user_data"><h3>{ this.dataSet[0].dateDue }</h3></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-exclamation-triangle" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-3">
                                   <div className="widget-user_title"><h4>risk factor:</h4></div>
                                   <div className="widget-user_data"><h3>{ this.dataSet[0].risk }</h3></div>
                               </section>
                               <span className="dashboard-icon"><i className="fa fa-usd" aria-hidden="true"/></span>
                               <section className="widget-user col-lg-3">
                                   <div className="widget-user_title"><h4>values:</h4></div>
                                   <div className="widget-user_data"><h3>{ this.dataSet[0].value }</h3></div>
                               </section>
                               <section className="dashboard-entity">
                                   <span className="dashboard-icon"><i className="fa fa-usd" aria-hidden="true"/></span>
                                   <section className="widget-user col-lg-3">
                                       <div className="widget-user_title"><h4>entity:</h4></div>
                                       <div className="widget-user_data"><h3>{ this.dataSet[0].entity }</h3></div>
                                   </section>
                               </section>
                                    <section className="dashboard-notifications_alert">
                                        <p>Store <a href="#">Boston(130)</a> was found with High Damage Registration for High Risk Products in the last 7 days compare to previous 14 days and compare to North region bench mark activity.</p>
                                    </section>
                               </section>
                            <section className="col-lg-3 dashboard-rightSide">
                                <section className="main-dashboard_panel">
                                    <section className="main-dashboard_title">
                                        <h4>Status</h4>
                                    </section>
                                </section>
                                <section className="main-dashboard_info">
                                    <h1>In Progress</h1>
                                </section>
                            </section>
                            <section className="col-lg-3 dashboard-rightSide">
                                <section className="main-dashboard_panel">
                                    <section className="main-dashboard_title">
                                        <h4>Status</h4>
                                    </section>
                                </section>
                                <section className="main-dashboard_info">
                                    <h1>In Progress</h1>
                                </section>
                            </section>
                            <section className="dashboard-tabControl col-lg-9">
                                <ul>
                                    <li>Caught Items(4)</li>
                                    <li>Best Practices(3)</li>
                                    <li>Tasks(3)</li>
                                    <li>History</li>
                                </ul>
                            </section>
                            <section className="col-lg-9 dashboard-input">
                                <input type="text" name="commentBox" ref="commentField" />
                                <button onClick={
                                    () => {

                                        (this.refs.commentField.value !== '') ? this.onSubmit(this.refs.commentField.value) : alert('Error');
                                        this.refs.commentField.value = '';
                                    }
                                }>
                                    Add Comment</button>
                            </section>
                            <section className="col-lg-9 dashboard-commentBoard">
                                <ul className="dashboard-commentBoard_list">
                                {
                                    (this.state.comments.length !== 0) ? this.state.comments.map((key, index) => {
                                        return <li key={ index } className="new-item">{key}
                                        <span style={{ float: 'right', color: 'black' }}>
                                            <button onClick={() => { this.removeComment(index) }}>Delete</button>
                                        </span>
                                        </li>
                                    }) : <h3>No comments! :(</h3>
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