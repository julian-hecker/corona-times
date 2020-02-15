import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <h1 className="navbar__branding">Corona Times</h1>
                </div>
            </nav>
        );
    }
}

export default Navbar;