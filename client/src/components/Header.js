import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    renderAdmin() {
        switch (this.props.auth) {
            case null:
                return;
            case false: 
                return (
                    <li><a herf="/auth/google">Login With Google</a></li>  
                );
            default:
                return <li><a>Logout</a></li>;
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
                        <li>
                            <a>{this.renderAdmin()}</a>
                        </li>
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