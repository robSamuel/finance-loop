import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
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
        return NAV_LIST.map(item => {
            return (
                <div key={uuidv4()}>
                    <NavItem>
                        <NavLink href={`/${item.link}`}>
                            {item.text}
                        </NavLink>
                    </NavItem>
                </div>
            );
        })
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Finance Loop</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {renderNavItems()}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Layout;
