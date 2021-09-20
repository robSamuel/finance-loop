import React from 'react';
import logo from '../../logo.svg';

const Footer = props => {
    return (
        <footer className="Footer">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 col-md-6">
                        <div className="Footer-column d-flex h-100">
                            <img
                                src={logo}
                                alt="logo"
                                width="100px"
                                height="100px"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="Footer-column d-flex h-100">
                            <span>
                                © {new Date().getFullYear()}, Construido
                                con
                                {` `}
                                <a
                                    className="Footer-link"
                                    href="https://reactjs.org"
                                >
                                    ReactJS
                                </a>
                                {` `}
                                y desarrollado por
                                {` `}
                                <a
                                    className="Footer-link"
                                    href="https://github.com/robSamuel"
                                >
                                    Robert Samuel
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
