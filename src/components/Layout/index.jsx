import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <div className="Layout-container">
                <main>{children}</main>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
