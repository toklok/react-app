import React from 'react';
import UserProfile from './user-profile';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header style={{ background: this.props.background }} className="col-lg-12 col-md-12 col-sm-12 header-main">
                <section className="header-logo col-lg-6 col-md-6 col-sm-6">
                    <h1 style={{ color: (this.props.color) ? '#fff' : '#333' }} >{ this.props.name }</h1>
                </section>
                    <section className="header-toolBar col-lg-6 col-md-6 col-sm-6">
                        <ul className="header-toolBar_ul">
                            <li className="header-toolBar_anim">
                                <input type="search" placeholder="Search..."></input>
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