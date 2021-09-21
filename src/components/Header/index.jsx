import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from 'reactstrap';

const NAV_LIST = [
    {
        text: 'Cátalogo de Cuentas',
        link: 'accounts-manager'
    },
    {
        text: 'Estados Financieros',
        link: 'estados-financieros'
    },
    {
        text: 'Razones Financieras',
        link: 'razones-financieras'
    },
    
]

const Layout = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

    const renderNavItems = () => {
        return NAV_LIST.map(item => (
            <NavItem className="Header-item" key={uuidv4()}>
                <Link className="Header-link" to={`/${item.link}`}>
                    {item.text}
                </Link>
            </NavItem>
        ));
    }

    return (
        <header className="Header bg-dark">
            <div className="container">
                <Navbar dark light expand="lg">
                    <NavbarBrand
                        className="Header-brand"
                        href="/"
                    >
                        Finance Loop
                    </NavbarBrand>
                    <NavbarToggler
                        className="mr-2"
                        onClick={toggle}
                    />
                    <Collapse
                        className="justify-content-end"
                        isOpen={isOpen}
                        navbar
                    >
                        <Nav className="mr-auto" navbar>
                            {renderNavItems()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Layout;
