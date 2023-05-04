import React, { FunctionComponent } from 'react';
import { Button, Navbar, NavbarBrand } from "reactstrap";

import styles from './Appbar.module.scss';

const Appbar: FunctionComponent = () => {

    return (
        <Navbar dark expand="md" className={`${styles.Appbar} bg-primary text-light`}>
            <NavbarBrand href="/" className="ms-5">
                <i className="bi-terminal-fill" role="img" aria-label="GitHub" /> Web Status
            </NavbarBrand>
        </Navbar>
    );
}

export default Appbar;
