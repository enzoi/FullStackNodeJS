import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    renderAdmin() {
        switch (this.props.auth) {
            case null:
                return;
            case false: 
                return (
                    <li><a href="/auth/google">Login With Google</a></li>  
                );
            default:
                return <li><a href="/api/logout">Logout</a></li>;
       }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderAdmin()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
};

export default connect(mapStateToProps)(Header);