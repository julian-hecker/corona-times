import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Navbar.scss';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Corona Times</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/stats">Statistics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/info">Information</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/form">Survey</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/julian-hecker/corona-times">Code</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Example;
