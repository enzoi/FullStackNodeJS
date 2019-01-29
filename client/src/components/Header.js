import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Payments from './Payments';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <Menu.Menu className="right">
                        <Menu.Item>
                            <a href="/auth/google">Login With Google</a>
                        </Menu.Item>
                    </Menu.Menu>
                );
            default:
                return [
                    <Menu.Menu key="0" className="right">
                        <Menu.Item key="1"><Payments /></Menu.Item>
                        <Menu.Item key="2" style={{ margin: '0 10px' }}>
                            Credits: {this.props.auth.credits}
                        </Menu.Item>
                        <Menu.Item key="3"><a href="/api/logout">Logout</a></Menu.Item>
                    </Menu.Menu>
                ];
       }
    }

    render() {
        return (
            <Menu>
                <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
                        Emaily
                </Link>
                {this.renderContent()}
            </Menu>
                    
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
};

export default connect(mapStateToProps)(Header);