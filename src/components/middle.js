import React from 'react';

class Middle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="col-lg-12 col-md-12 col-sm-12">
                <section className="col-lg-8 col-md-8 col-sm-6">
                    <section className="panel panel-default">
                        <section className="panel-heading">{ `${4 + 4}` }</section>
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
                <section className="col-lg-4 col-md-4 col-sm-4">
                    <section className="panel panel-default">
                        <section className="panel-heading">{ `${ 8 * 256 }` }</section>
                        <section className="panel-body">
                            { `${" content for your pleasure " +  4 + 4 }` }
                        </section>
                        <section className="panel-footer"> { `${" panel footer "}` }</section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Middle;