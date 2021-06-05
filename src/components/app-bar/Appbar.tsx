import React, {FunctionComponent} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";

import styles from './Appbar.module.scss';

const Appbar: FunctionComponent = () => {

    return (
        <Navbar light expand="md" className={styles.Appbar}>
            <NavbarBrand href="/" className="ms-5">
                <i className="bi-terminal-fill" role="img" aria-label="GitHub"/> Web Status
            </NavbarBrand>
        </Navbar>
    );
}

export default Appbar;
