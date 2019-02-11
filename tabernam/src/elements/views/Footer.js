import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-header">
                    <span className="footer-title">
                        Tabernam
                    </span>
                </div>
                <div className="footer-content">
                    <div className="content-links">
                        <ul>
                            <li className="content-links-option"><a href="#0">Suspendisse</a></li>
                            <li className="content-links-option"><a href="#0">Mauris</a></li>
                            <li className="content-links-option"><a href="#0">Praesent</a></li>
                        </ul>
                    </div>
                    <div className="content-social">
                        <a href="#0"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href="#0"><i className="fab fa-twitter-square fa-2x"></i></a>
                        <a href="#0"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                    <div className="content-links">
                        <ul>
                            <li className="content-links-option"><a href="#0">Aliquam</a></li>
                            <li className="content-links-option"><a href="#0">Vivamus</a></li>
                            <li className="content-links-option"><a href="#0">Vestibulum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-credentials">
                    <div className="footer-title">Fusce a lacus</div>
                    <span className="gh-button"><a href="https://github.com/George701/react-verification-task">Maecenas facilisis <i className="fab fa-github"></i></a></span>
                    <div>&#169; 2019 | Georgii Chernikov</div>
                </div>
            </footer>
        );
    }
}

export default Footer;