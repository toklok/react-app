import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header-main col-lg-12 col-md-12 col-sm-12">
                <section className="header-logo col-lg-6 col-md-6 col-sm-6">
                    <img src="http://placehold.it/250x100" alt="Placeholder image"/>
                </section>
                <section className="header-navWrap col-lg-6 col-md-6 col-sm-6">
                    <ul className="header-navBar">
                        {
                            ['Store', 'Checkout', 'Item 3', 'Item 4', 'Item 5'].map((key, index) => {
                                return <a href={`${key}.html`}>
                                    <li className="header-navBar_items" key={ index } value={key}>
                                        {key}
                                    </li>
                                </a>;
                            })
                        }
                    </ul>
                </section>
            </header>
        )
    }
}

export default Header;