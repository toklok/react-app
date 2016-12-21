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
                            { `${4 + 4}` }
                            <h1>Maecenas eu placerat</h1>
                            <p>Etiam aliquam sem ac velit feugiat elementum. Nunc eu elit velit, nec vestibulum nibh. Curabitur ultrices, diam non ullamcorper blandit, nunc lacus ornare nisi, egestas rutrum magna est id nunc. Pellentesque imperdiet malesuada quam, et rhoncus eros auctor eu. Nullam vehicula metus ac lacus rutrum nec fermentum urna congue. Vestibulum et risus at mi ultricies sagittis quis nec ligula. Suspendisse dignissim dignissim luctus. Duis ac dictum nibh. Etiam id massa magna. Morbi molestie posuere posuere.  </p>

                            <h1>Nullam eros mi</h1>
                            <p>Etiam aliquam sem ac velit feugiat elementum. Nunc eu elit velit, nec vestibulum nibh. Curabitur ultrices, diam non ullamcorper blandit, nunc lacus ornare nisi, egestas rutrum magna est id nunc. Pellentesque imperdiet malesuada quam, et rhoncus eros auctor eu. Nullam vehicula metus ac lacus rutrum nec fermentum urna congue. Vestibulum et risus at mi ultricies sagittis quis nec ligula. Suspendisse dignissim dignissim luctus. Duis ac dictum nibh. Etiam id massa magna. Morbi molestie posuere posuere.  </p>
                            {/*perhaps write a story with the props or state*/}
                        </section>
                        <section style={{ color: 'blue'}} className="panel-footer">{ `${ 8 * 256 }` }</section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Middle;