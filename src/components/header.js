import React from 'react';
import UserProfile from './user-profile';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header style={{ background: this.props.background }} className="col-lg-12 col-md-12 col-sm-12">
                <section className="header-logo col-lg-8 col-md-8 col-sm-6">
                    <h1 style={{ color: (this.props.color) ? '#fff' : '#333' }} >{ this.props.name }</h1>
                </section>
                    <section className="header-toolBar col-lg-4 col-md-4 col-sm-4">
                        <ul className="header-toolBar_ul">
                            <li>
                                <input type="search" id="search" placeholder="What are you looking for?"></input>
                            </li>
                            <li>
                                <i className="fa fa-search" aria-hidden="true">
                                </i>
                                <span className="header-toolBar_ul-search"> Search </span>
                            </li>
                            <li>
                                <UserProfile/>
                            </li>
                            <li>
                                <i className="fa fa-cog" aria-hidden="true">
                                </i>
                            </li>
                        </ul>
                    </section>
            </header>
        )
    }
}

export default Header;