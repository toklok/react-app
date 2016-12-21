import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.rootURL = 'https://randomuser.me/api/';

        this.state = {
            profilePic: ''
        };
    }


    componentDidMount() {
        axios.get(this.rootURL)
            .then((response) => {
                this.setState({
                    profilePic: response.data.results[0].picture.thumbnail
                })
            })
    }

    render() {
        return (
                <img className="header-toolBar_ul-img" src={ this.state.profilePic } alt="profile pic" />
        )
    }
}

export default UserProfile;