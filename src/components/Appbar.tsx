import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";

const Appbar = () => {

    return (
        <Navbar light expand="md">
            <NavbarBrand href="/" className="ms-5">
                <i className="bi-terminal-fill" role="img" aria-label="GitHub"/> Web Status
            </NavbarBrand>
        </Navbar>
    );
}

export default Appbar;
